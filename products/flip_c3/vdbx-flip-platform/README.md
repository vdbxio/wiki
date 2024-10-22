---
description: A platform to create IOT devices for 12-48v battery systems.
---

# FLIP Platform

<figure><img src="../../../.gitbook/assets/flip-c3-render-mktg-prelaunch-v090.jpg" alt=""><figcaption><p>Marketing render of the FLIP-C3 as first prototype boards are ordered. 23.04.04</p></figcaption></figure>

{% hint style="info" %}
Some of this is focued on the FLIP\_C3 specifically and will generalize over time. Header footprint is locked as of v1 and mounting hole is locked as of v1.1&#x20;
{% endhint %}

## Design Philosophy

The FLIP platform is a set of standards between circuit designs with the intention of easy install within 12-48v lithium battery systems. It designed as a modular system to create IOT hardware for modern open-source automation systems. The platform will consist of mainboards which have processing and network capabilities and the modules which will provide or interface with switches, lighting, sensors, relays, dimmers, etc.&#x20;

The mainboards should be able to power themselves and basic modules from the an on-board buck regulator. Additional power modules can be placed in parallel with the base moule built into the mainboard.

I2C should be considered a high-priority interconnect due to its capability for easy expansion and daisy-chaining. In as many situations as possible, modules should be able to function as either tethered I2C device or with a FLIP mainboard installed. A standalone device (mainboard with module) should be able to connect to it's mainboardless version of itself via the Qwiic & Stemma QT compatible connector. In some cases, smaller boards could stack infinitely, limited only by the available I2C addresses. We've currently coined these smaller boards as _backpacks_.

* Power modules should be tolerant to 60v DC input which covers up to 16s Lifepo4 systems.
  * 5v with at least 1A of available power without extra cooling
  * Future should offer higher voltage ranges for electric
  * 60v board to board header for distribution
* USB-C with 5v buck converter
* Standardized 2.54mm dual header layout between boards
  * Passthrough stacking pin/socket headers included
* Stemma QT & Qwiic compatible SH 1.0 connectors
  * I2C & UART
* Home Assistant as target platform
  * ESP32 for Wifi and Ethernet
    * ESPHome Firmware
* Future Targets
  * RP2040
  * EBYTE Modules for Zigbee&#x20;
    * PTVO Firmware?
  * Thread/Matter
    * Must have simple device provision like ESPHome&#x20;

## Software

You will always be able to write whatever code want to a FLIP device, but our priority is ESPHome due to its ease of use with beginners. Technically minded artists, home automation enthusiasts, and other makers who struggle with will likely find it easier, especially if they have experience with somthing like HTML/CSS.&#x20;

ESPHome is backed by the Open Home Foundation started by Home Assistant/Nabu Casa.

WLED is a high priority platform, but we will likely work within the bounds of existing functionality. Its development is progressing steadily and there is extreme interest in WLED specific features in hardware.

TASMOTA is very popular, and we look forward to seeing any work you do with it. At the moment, we are not going to be focusing any efforts on this platform.&#x20;



## Possible or Realized Products based on FLIP

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

