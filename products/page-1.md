---
description: A modern take on a timeless I2C IO expander
---

# IOByte

## Summary

The goal of the IOByte is to create a better breakout for the PCF8574 GPIO Extender mostly focused on quickly deploying relays and switch panels via i2c.

The initial idea behind the PCB design was based on having it fit directly on a commonly available 8-Channel relay board, essentially turning it into an all-in-one i2c 8-channel relay board. Existing breakouts generally would require 10 DuPont leads (or other wire interface) to the relay board.

{% hint style="warning" %}
TODO - insert before after photo here
{% endhint %}

Further updates have focused on the input capabilities of the PCF8574 by adding enough VCC and GND pins to easily add high or low triggered switches. This is still being tested.

## Changelog

v1.2 - Production run

* Remove VCC Header Row
* Re-Align GND Header Row to allow for a VCC/GND 2P Dupont connection
* Previously known as Pin Saver 8

v1.1 - Attempt to add features for making input hookups easier

* Add GND and VCC header rails parallel to original output header
* Reduce spacing for address jumper footprint
  * [x] ~~TODO: Determine if this is acceptable~~
* Purchased stencil with order to test production runs
  * [x] ~~TODO: Test stencil - remove address jumper openings?~~

v1.0 - Original prototype was designed to fit directly on the headers of a commonly available 8-channel relay board.

* Passthrough i2c headers on opposing sides of the board
* Address jumpers were a bit too widely spaced to solder easily
