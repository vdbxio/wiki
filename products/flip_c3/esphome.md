# ESPHome

## Easy Installer

If you order from us, your FLIP\_C3 or FLIP\_C3 based device should have a pre-installed version of ESPHome, but if you need to reinstall this base firmware, we've set up an easy installer on our main website.  This will allow you to use Chrome or Edge to install it via a USB-C cable. Current versions **cannot** be connected via USB-C while powered via the buck converter.&#x20;

[https://www.vdbx.io/install](https://www.vdbx.io/install)

You may need to hold the BOOT button as you connect the USB cable. Alternatively you can hold the BOOT button while you press and release the RESET button if the FLIP\_C3 is already connected via USB-C. Hold the BOOT button for a couple seconds after the device is connected to your computer and then proceed with the installation above. Once complete, power cycle the FLIP-C3 with the RESET button or disconnecting and reconnecting the cable. You can also use this time to swap to a DC power source via the 2P spring connector.&#x20;

## Adopt In ESPHome

Once you've followed the steps to connect your FLIP\_C3 to Wifi, you should see it in the ESPHome dashboard available to be adopted. Adopting into ESPHome will generate a base YAML that references our YAML file on Github as an external package with the following lines:

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

If you like, you can easily start a blank ESPHome device based on the ESP32-C3 using `esp32-c3-devkitm-1` board type. This is default in ESPHome for C3 based boards and we use chip level pin numbers on our silkscreen.

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

