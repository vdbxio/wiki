---
description: An ESP32-C3 with a 50+v tolerant 5v/2A buck converter & other special sauce.
---

# FLIP\_C3

## Summary

The first mainboard for the FLIP platform is an ESP32-C3 board that can be deployed on any battery system up to 16s LifePO4. It is designed for use with ESPHome, but can be flashed with other popular firmwares such as TASMOTA and WLED. We have a whole line of smart products based on this as their main powerhouse.

Available for sale: [https://www.vdbx.io/product/flip-c3](https://www.vdbx.io/product/flip-c3)

## Specs & Features

* On-board 5v/2A buck-converter tolerant **up to 50+v DC**
  * 60v absolute max, but do not live connect over 50v
    * Connect to battery when it is low
    * Use a low value resistor to pre-charge circuit (pro move)
* Low-profile press-in wire connector for DC input
  * 24-16AWG Solid
  * 22-18AWG Stranded - Ferrules are suggested
  * 2x2P 2.54mm pass-through power header for stacking
  * Push release spring mechanism
* **ESP32-C3** designed for ESPHome and Home Assistant.
* **USB-C** input for alt power and programming
  * Reverse current protection from DC input via diode&#x20;
    * No data connection while powered by DC
* LEDs on-board
  * **WS2812B RGB** - `GPIO8`
    * Digital output available on header as `L8` to drive short runs&#x20;
  * Red Status LED - `GPIO10`
* UART and I2C on **Qwiic/Stemma QT** compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* Boot Button `GPIO9`
* Reset Button `ENABLE`

### ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500, though support for both are currently limited in ESPHome.

Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C bus, but we'll cross that bridge when we come to it.

## Pinout

<figure><img src="https://cdn.jsdelivr.net/gh/vdbxio/wiki@main/pcbs/flipc3-pinout.drawio.svg" alt=""><figcaption><p>Pinout of the FLIP_C3</p></figcaption></figure>

## License & Files

The FLIP\_C3 is offered as open source under the [Creative Commons 4.0 Attribution Share-Alike License](https://creativecommons.org/licenses/by-sa/4.0/) (CC 4.0 BY-SA)

Original design was created in EasyEDA Pro and is available to modify and fork via its listing on OSHW Lab:

{% embed url="https://oshwlab.com/vdbxio/flip_c3" %}
