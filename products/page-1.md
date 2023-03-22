---
description: A modern take on a timeless I2C IO expander
---

# IOByte

{% hint style="danger" %}
**v1.2** has a slight oversight having to do with the chip we tested vs the one we went to production with - **All address jumpers must be set ON or OFF** - leaving the address unset will inhibit functionality.
{% endhint %}

## Summary

The goal of the IOByte is to create a better breakout for the PCF8574 GPIO Extender mostly focused on quickly deploying relays and switch panels via i2c.

The initial idea behind the PCB design was based on having it fit directly on a common 8-Channel relay board. Existing breakouts generally would require 10 DuPont leads (or other wire interface) to the relay board. Solder on a 10p female header, connect I2C and you have a super fast and cheap deployment.

<figure><img src="../.gitbook/assets/839298DD-CB0F-48A6-9CFE-BE4D96BBF20E_1_201_a.jpeg" alt=""><figcaption></figcaption></figure>

The IOByte can also act as a binary input device. The ground row of pins makes it easy to deploy simple switches connected from and of the 8 open-drain pins to ground. Quickly deploy switch panels with your favorite hardware.

## v1.2 Notes

Previous versions were tested with PCF8574 chips from TI, which don't seem to care if they start-up with the address pins floating. This run was assembled with chips from HGSEMI via JLCPCB and further tested with XINLUDA chips which are also angsty about floating address pins.

I recently noticed Adafruit's module uses a 10k resistor array to pull all address pins to ground with a set of solder jumpers to pull them high. I am also warming up to the Qwiic/Stemmma QT connectors they use. Next version should use them.

It seemed there may have been an issue with the 1k pull-ups on the SCL & SDA, but that might have been a red-herring and was instead the above issue with floating address pins. Despite this, future versions should switch to 4.7k - 10k as research has stated it to a better option. The retail versions I have use 1k with an HLF chip. These seem to be unaffected by floating address pins.

## Changelog

v1.2 - Production run

* **Make sure address pins are NOT floating!**
  * _next version to force default address_
* Removed VCC Header Row
* Re-Aligned GND Header Row to allow for a VCC/GND 2P Dupont connection
* Previously known as Pin Saver 8

v1.1 - Attempt to add features for making input hookups easier

* Added GND and VCC header rails parallel to original output header
* Reduce spacing for address jumper footprint
  * [x] ~~TODO: Determine if this is acceptable~~
* Purchased stencil with order to test production runs
  * [x] ~~TODO: Test stencil - remove address jumper openings?~~

v1.0 - Original prototype was designed to fit directly on the headers of a commonly available 8-channel relay board.

* Passthrough i2c headers on opposing sides of the board
* Address jumpers were a bit too widely spaced to solder easily
