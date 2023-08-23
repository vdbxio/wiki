---
description: A platform to create IOT devices for 12-48v battery systems.
---

# FLIP Platform

<figure><img src="../.gitbook/assets/flip-c3-render-mktg-prelaunch-v090.jpg" alt=""><figcaption><p>Marketing render of the FLIP-C3 as first prototype boards are ordered. 23.04.04</p></figcaption></figure>

## Current State

> Last updated: 23.04.25

* First batch of 10 ordered
  * Found that LDO circuitry will not work
* Ordered 10 switching buck PCBs based on LMR16020 IC
  * Ordered as a separate circuit for analysis before integrating into C3 circuitry - the LMR15030 (3a version) might find its way as a backback or an alternate part pick
  * Design should fit in same space as LDO circuitry and not drastically encroach on z-height.
  * Delivered 4/25 to VDBX mailbox in Oakland.

## Design Philosophy

The FLIP platform is a set of standards between circuit designs with the intention of easy install within 12-48v lithium battery systems. It designed as a modular system to create IOT hardware for modern open-source automation systems. The platform will consist of mainboards which have processing and network capabilities and the modules which will provide or interface with switches, lighting, sensors, relays, dimmers, etc.&#x20;

The mainboards should be able to power themselves and basic modules from the an on-board buck regulator. Additional power modules can be placed in parallel with the base moule built into the mainboard.

I2C should be considered a high-priority interconnect due to its capability for easy expansion and daisy-chaining. In as many situations as possible, modules should be able to function as either tethered I2C device or with a FLIP mainboard installed. A standalone device (mainboard with module) should be able to connect to it's mainboardless version of itself via the Qwiic & Stemma QT compatible connector. In some cases, smaller boards could stack infinitely, limited only by the available I2C addresses. We've currently coined these smaller boards as _backpacks_.

* Power modules should be tolerant to 60v DC input which covers up to 16s Lifepo4 systems.
* USB-C with 5v LDO regulator as alternate power input allows for alternate power options.
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

##

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
  * 3A+ Switching power supply
    * 16020 has a 16030 pin compatible 3A version but will require external component selection. Good for LED control board?
  * RGB Addressable LED control (with DC buck?)

##
