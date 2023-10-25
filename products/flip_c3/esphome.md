# ESPHome

## Easy Installer

Use any Chrome based browser (including Edge) to install our base firmware from your browser using a USB cable. Current versions cannot be connected to via USB when powered via the buck converter.

[https://www.vdbx.io/install](https://www.vdbx.io/install)

## Adopt In ESPHome

Adopting into ESPHome will generate a base YAML that references our YAML as an external package with the following lines:

```yaml
packages:
  vdbxio.FLIP-C3: github://vdbxio/wiki/esphome/flip-c3.yaml
```

This includes references to all the basics of the hardware and more. This includes the onboard WS2812, the red status LED, the Boot Button on GPIO9 and I2C is defined at id: `bus_a`

You can add ESPHome YAML to the end of this to get started quickly.

## YAML Reference

The following are snippets to properly interact with FLIP\_C3 hardware in ESPHome

Direct reference to the YAML we ship with is available on Github:&#x20;

[https://github.com/vdbxio/wiki/tree/main/esphome](https://github.com/vdbxio/wiki/tree/main/esphome)

We're still working on organizing and modularization. Feel free to help out.  There's a lot more in there than referenced here.

### Board Definition

If you like, you can easily start a blank ESPHome device based on the ESP32-C3 using `esp32-c3-devkitm-1` board type. (This is default in ESPHome)

```yaml
esphome:
  name: bare-minimum
  friendly_name: Bare Minimum

esp32:
  board: esp32-c3-devkitm-1
  framework:
    type: arduino

```

### Boot Button

The `BOOT` button is available in software on `GPIO9` after boot. If held during boot, FLIP\_C3 will be put into bootloader/flash mode.

```yaml
binary_sensor:
  - platform: gpio
    name: Boot Button
    pin: 
      number: 9
      inverted: True
      mode:
        input: True
        pullup: True
```

### WS2812

```yaml
light:
  - platform: esp32_rmt_led_strip
    id: onboard_rgb
    rgb_order: GRB
    rmt_channel: 0
    chipset: ws2812    
    pin: 8
    restore_mode: RESTORE_AND_OFF
    num_leds: 1
    name: "RGB LED"
```

### Status LED

```yaml
light:
  - platform: status_led
    name: "Status LED"
    id: status_led
    pin: 10
```

