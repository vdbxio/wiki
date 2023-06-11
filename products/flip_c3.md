---
description: An ESP32-C3 with a 60V/2A buck converter & other special sauce.
---

# FLIP\_C3

## FLIP-C3

The first mainboard for the FLIP platform is an ESP32-C3 board that can be deployed on any battery system up to 16s LifePO4.

* On-board 2A buck-converter tolerant **up to 60v DC**
* Low-profile press-in wire connector for DC input
  * Reverse polarity protection.
  * 24-18AWG Solid
  * 22-20AWG Stranded
  * 2x2P 2.54mm pass-through header for stacking
* **ESP32-C3** designed for ESPHome and Home Assistant.
* **USB-C** input for alt power and programming
  * Reverse current protection from DC input via diode
    * Allows for programming in place while protecting both devices.
* LEDs on-board
  * **WS2812B RGB** - `GPIO8`
  * Purple(?) LED - `GPIO10`
* UART and I2C on **Qwicc/Stemma QT** compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* Boot Button `GPIO9`
* Reset Button `ENABLE`

### ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500, though support for both are limited in ESPHome.

It is likely that the C3 will not be enough as the platform grows and requires more of the processor. Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C.
