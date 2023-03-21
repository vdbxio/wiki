---
description: 8-in-4 Home Assistant Remote
---

# Unnamed Switch Panel

## Summary

A set of four (4) SPDT toggle switches in a modular wall enclosure and faceplate system. It is designed to work directly with our PT/Flip node platform running ESPHome.  It is connected via an I2C interface allowing it also to be daisy chained to itself to create larger switch panels.&#x20;

SPDT (Single Pole Dual Throw) - A dual throw switch has two distinct motions from its center. In a momentary version, it can toggle outward in two directions, for example up/down or left/right based on the physical orientation of the switch. Single pole refers to the fact that there is only one bank of connections being switched.&#x20;

## User Experience

SPDT momentary toggle switches allow for a direct UX comparison to legacy house switches when moving to smart/iot automation systems. Keeping the muscle memory of Up = On and Down = Off is important to a lot of us when much of the IOT landscape is trying to get us to learn new UX patterns.&#x20;

{% hint style="info" %}
Spacing between switches could be an issue. Test in real scenarios.
{% endhint %}

## Design & Manufacturing

The required depth of the components created a unique opportunity to be bold in our design choices. The spacious cover plate is larger and almost floats on top of the housing which is recessed behind it. In a vacuum, its shape evokes a mid-century modern design aesthetic, though color and material choices could adapt it to any decor.

The cover-plate design is easily manufacturable from any material that is able to be laser cut or CNC machined from 2D design files.

The housing is 3D printable with the possibility of injection molding with the right modifications. Could theoretically be bent sheet metal.

## Placement

The design is intended for placement anywhere, and it was specifically designed so it could live next to an outlet/switch plate rather than in it. Blanking plates will be available optionally with and without AC transformers for this possible use, but we encourage an open mind when considering placement.&#x20;

The rear of the housing is mostly open, but there are two areas that can be used for VHB or nano-style double-sided tape. Next to each one of those areas is a hole for screw mounting.

When screw mounting, remove the cover-plate screws and mount the housing first, then re-attach the cover-plate and screws.

## Technical

* Based on PCF8574 IO Expander
  * 8 Pins for switch 1-4 up/down
  * Up to 8 panels on same I2C bus via 3P DIP switch
* Qwiic & Stemma QT compatible 4 pin headers for expansion
* PT/Flip Module accepts USB-C or up to 60V DC
  * Great for RVs or off-grid!
* Designed to be as compact as possible for custom designs



## Resources

[https://s.click.aliexpress.com/e/\_DefEShP](https://s.click.aliexpress.com/e/\_DefEShP) - Thin USB-A to C cables for placing next to an outlet with USB ports

