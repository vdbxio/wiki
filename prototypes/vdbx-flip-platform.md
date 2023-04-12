---
description: A platform for creating IOT devices on off-grid battery systems.
---

# VDBX/Flip Platform

<figure><img src="../.gitbook/assets/flip-c3-render-mktg-prelaunch-v090.jpg" alt=""><figcaption><p>Marketing render of the FLIP-C3 as first prototype boards are ordered. 23.04.04</p></figcaption></figure>

## Design Philosophy

The FLIP platform is a set of standards between circuit designs with the intention of easy install within 12-48v lithium battery systems. It designed as a modular system to create IOT hardware for modern open-source automation systems. The platform will consist of mainboards which have processing and network capabilities and the modules which will provide or interface with switches, lighting, sensors, relays, dimmers, etc.

The mainboards should be able to power themselves and basic modules from the on-board LDO array. More complex or power hungry modules may have their own LDO/switching regulator.&#x20;

I2C should be considered a high-priority interconnect due to its capability for easy expansion and daisy-chaining. In as many situations as possible, modules should be able to function as either tethered I2C device or with a FLIP mainboard installed. A standalone device (mainboard with module) should be able to connect to it's mainboardless version of itself via the Qwiic & Stemma QT compatible connector. In some cases, smaller boards could stack infinitely, limited only by the available I2C addresses. We've currently coined these smaller boards as _backpacks_.

* Up to 60v DC input covers up to 16s Lifepo4 systems
  * USB-C as alternate power source
* Standardized 2.54mm dual header layout between boards
  * Passthrough stacking pin/socket headers included
* Stemma QT & Qwiic compatible SH 1.0 connectors
  * I2C & UART
* Home Assistant as target platform
  * ESP32 for Wifi and Ethernet
    * ESPHome Firmware
  * EBYTE Modules for Zigbee (future)
    * PTVO Firmware
  * Thread (Future)

## FLIP-C3

The first mainboard for the FLIP platform designed to run ESPHome firmware. It is easily flashable with custom firmware like Tasmota, WLED, etc. but these are not our target and you'll be on your own with those until community interest is&#x20;

* ESP32-C3 designed for ESPHome and Home Assistant.
* Low-profile press-in wire connector for 6-60VDC input
  * Reverse polarity protection.
  * 24-18AWG Solid
  * 22-20AWG Stranded
  * 2x2P 2.0mm pass-through header for stacking
* USB-C input for alternate power and programming
  * Reverse current protection from DC input via diode
    * Allows for programming in place while protecting both devices.
* LEDs on-board
  * WS2812B RGB - `GPIO8`
  * Purple(?) LED - `GPIO10`
* UART and I2C on Qwicc/Stemma QT compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* Boot Button `GPIO9`
* Reset Button `ENABLE`

### ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500, though support for both are limited in ESPHome.

It is likely that the C3 will not be enough as the platform grows and requires more of the processor. Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C.

## Future Products

* Switch Panel (Unnamed)
* PwrTool Family
  * Large main system shunt
  * Small Handheld coulometer with XT60, PP45, screw-in, etc. connection options
  * Branch Manager - Smart power distribution panel&#x20;
    * 8x High power p-channel mosfets
  * Lighting Director - PWM Mosfet controller for DC lighting devices.
* Backpacks - should be the same size as the FLIP itself.
  * PWM mosfet 4x via direct connection to GPIO
  * RS485 to TTL for Solar Chargers
  * \~2-3A Switching power supply
    * A few micro buck converter designs are in the works, this could just be an adapter.
  * RGB Addressable Led Driver
