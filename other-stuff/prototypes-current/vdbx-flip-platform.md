---
description: An ESP32-C3 module platform for VDBX.io products and general prototyping.
---

# VDBX Flip Platform

VDBX Flip is a modular microprocessor module designed the basis for our open-source home-automation hardware. The following is a list of its current features:

* ESPHome is the core software platform with the intent for it to connect directly to Home Assistant. Being based on ESP32 makes it hackable and expandable.
  * Flashing Tasmota or other firmware is likely trivial, but we don't currently keep aprised of its development. - Most devices at this point are I2C and known to be working in ESPHome, or are in development by the community.
  * Should come with  polished firmware in box.  Doesn't need to be done, it just needs to work.
* V1 back has four (4) 200ma LDOs in paralell that are tolerant to +60vdc
  * This is probably a terrible idea. We'll see.
  * Switching from 3v3 to 5v --- will run through VUSB to 3v3
* Needs a standardized pin layout for important protocols
  * Also on SH 1.0 header like Qwicc and Stemma QT
    * UART:  RX20/TX21
    * I2C:  SCL0/SDA1 - Test this
  * SPI is secondary, but there should be enough pins.&#x20;
    * Check against W5500 mini ethernet module pin-out
  * Don't feel the need to use the full pin header in designs, just enough for needed hookups and a solid connection.





## PINS RESEARCH

Make sure the pins make sense.

QTPY-C3

* RX: 20 / TX: 21
  * also M5 Stamp C3
* SCL: 6 / SDA: 5
* SCK: 10 / MISO: 8 / MOSI: 7
* Neopixel: 2
* Boot: 9

M5 Stamp C3 has two sets of four pin headers at the bottom of the board as part of the standard 2.54 header set on opposite sides. Just to the inside of each one is a 2.0 pitch replica header. For some reason one of the sets is pin 18/19 which is USB and the other is just 0/1 with no notes about what to do with this header you're given a special connector for.&#x20;

ESP32-C3-DevKit-RUST-1

* Neopixel: 2
* SCL8/SDA10
