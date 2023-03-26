---
description: An ESP32-C3 platform for creating IOT devices on off-grid battery systems.
---

# VDBX/Flip Platform

## Summary

* ESP32-C3 with ESPHome and Home Assistant as the target platforms
* 6-60VDC input covers 12-48v battery systems up to 16s Lithium-Ion
  * Low-profile press-in wire connector
    * 24-18AWG Solid
    * 22-20AWG Stranded
  * 2x2P 2.0mm pass-through header&#x20;
* USB-C input for alternate power and programming
  * Reverse current protection via power switch triggered off by DC input
    * Allows for programming in place while protecting both devices.
* LEDs on-board
  * WS2812B RGB - `GPIO8`
  * Purple(?) LED - `GPIO10`
* UART and I2C on Qwicc/Stemma QT compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* ~~N-Channel Mosfet - `GPIO3`~~
  * ~~Drive a contactor/LED light~~
  * This will be better served by a 4x MOSFET backpack
* Boot Button `GPIO9`
* Reset Button `ENABLE`

## Design Philosophy

VDBX//Flip should focus on easy deployment in battery-powered systems up to 48v nominal. The ESP32 should be able to power itself and a handful of basic sensors or IO expanders, extended power needs should be able to be satisfied by an external buck circuit.

In many cases I2C devices are addressable, meaning many can be attached to one microcontroller. By designing products around common I2C devices with a DIP header for a FLIP module, one could have multiple of one product nearby daisy chained to a main unit. Products also become interoperable with each other. For example, the switch panel could be added to the Branch Manager or a Lighting director. (See Products below)



## Wants & Needs

VDBX/Flip is a modular microprocessor module designed as the basis for our open-source home-automation hardware. The following is a list of the current wants and needs of the platform:

* ESPHome is the core software platform with the intent for it to connect directly to Home Assistant. Being based on ESP32 makes it hackable and expandable.
  * Flashing Tasmota or other firmware is likely trivial, but we don't currently keep aprised of its development. - Most devices at this point are I2C and known to be working in ESPHome, or are in development by the community.
  * Should come with  polished firmware in box.  Doesn't need to be done, it just needs to work.
* V1 back has four (4) 200ma LDOs in paralell that are tolerant to +60vdc
  * This is probably a terrible idea. We'll see.
  * Switching from 3v3 to 5v --- will run through VUSB to 3v3 Done 3/26
    * Need interlocking 5V to prevent backfeeding the USB-C port... allowing flashing when powered via DC input. done- 3/26
* Needs a standardized DIP pin layout for important protocols
  * Also on SH 1.0 header like Qwicc and Stemma QT
    * UART:  RX20/TX21
    * I2C:  SCL0/SDA1 - Test this
  * SPI is secondary, but there should be enough pins.&#x20;
    * Check against W5500 mini ethernet module pin-out
      * [https://github.com/esphome/feature-requests/issues/1235](https://github.com/esphome/feature-requests/issues/1235)
      * [https://github.com/esphome/esphome/pull/4424](https://github.com/esphome/esphome/pull/4424)
  * Don't feel the need to use the full pin header in designs, just enough for needed hookups and a solid connection.
    * Need better source for low profile headers.
* ~~Castellated holes would be a nice to have but would require redesigning to be single sided.~~
* Do we put  house voltage on a header
  * Its' own? -yes done 3/26

## Products

* Switch Panel (Unnamed)
* PwrTool Family
  * Large main system shunt
  * Small Handheld device with XT60, PP45, screw-in, etc. connection options
  * Branch Manager - Smart power distribution panel&#x20;
    * 8x High power p-channel mosfets
    * I2C IO expander allows panel to be expanded on itself
    *
  * Lighting Director - PWM Mosfet controller for DC lighting devices. Uses i2c IO
* Backpacks - should be the same size as the FLIP itself.
  * PWM mosfet 4x via direct connection to GPIO
  * RS485 to TTL for Solar Chargers
  * \~2-3A Switching power supply
    * A few micro buck converter designs are in the works, this could just be an adapter.
  * RGB Addressable&#x20;
*

## ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500, though support for both are limited in ESPHome.

It is likely that the C3 will not be enough as the platform grows and requires more of the processor. Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C.

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

## Datasheets

* 4x - [https://datasheet.lcsc.com/lcsc/2203221230\_Seaward-Elec-SE8650K1-HF\_C2838442.pdf](https://datasheet.lcsc.com/lcsc/2203221230\_Seaward-Elec-SE8650K1-HF\_C2838442.pdf)
*
