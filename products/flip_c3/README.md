---
description: An ESP32-C3 with a 60V/2A buck converter & other special sauce.
---

# FLIP\_C3

## Summary

The first mainboard for the FLIP platform is an ESP32-C3 board that can be deployed on any battery system up to 16s LifePO4. It is designed for use with ESPHome, but can be flashed with other popular firmwares such as TASMOTA and WLED. We have a whole line of smart products based on this as their main powerhouse.

## Specifications

* On-board 5v/2A buck-converter tolerant **up to 60v DC**
* Low-profile press-in wire connector for DC input
  * Reverse polarity protection.
  * 24-16AWG Solid
  * 22-18AWG Stranded - Ferrules are suggested
  * 2x2P 2.54mm pass-through header for stacking
* **ESP32-C3** designed for ESPHome and Home Assistant.
* **USB-C** input for alt power and programming
  * Reverse current protection from DC input via diode (no data connection while powered by DC)
* LEDs on-board
  * **WS2812B RGB** - `GPIO8`
    * Digital output available on header as L8 to drive short runs&#x20;
  * Red Status LED - `GPIO10`
* UART and I2C on **Qwicc/Stemma QT** compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* Boot Button `GPIO9`
* Reset Button `ENABLE`

### ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500, though support for both are currently limited in ESPHome.

Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C bus, but we'll cross that bridge when we come to it.