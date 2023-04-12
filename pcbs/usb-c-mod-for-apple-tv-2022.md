---
description: Power your Apple TV with USB-C
---

# USB-C Modkit for Apple TV 2022

{% hint style="danger" %}
Scheduled to be available by early to mid May 2023
{% endhint %}

{% hint style="info" %}
Make sure you have a 2022 Apple TV, sometimes referred to as third generation (of the black box versions). This will not work on other Apple TVs due to changes in layout and voltage change from 12v to 4.3v
{% endhint %}

## Tools Note

{% hint style="info" %}
Torx T7 and T5 are used by Apple, but we've noticed a T6 should manage to get both. **We've included a T6 allen-key with your kit.**
{% endhint %}

## Included in kit:

* 3x Guitar picks to open case
* T6 Allen key to remove power supply & power connector
* 3D Printed insert for power connector opening
* 3D Printed spacer and insulator
* The Modkit PCB with LDO
* 2x M2.5x10mm Screws
* Quick Start Card

## Summary

The AppleTV seems to have always been the only TV streaming box that isn't powered by a USB cable. This mod kit changes that, keeping a clean unmodified look. Grab any USB-C cable and any charger that can provide about  7 watts or more.&#x20;

## Opening the Apple TV

Use the included guitar picks to open the AppleTV by inserting them into the seam near the bottom edge to release some clips. This can be tricky if you aren't used to it as it is nearly right on the corner and very well hidden.&#x20;

1. There is a slight lip inward and then it goes straight up.&#x20;
2. There are three clips on each edge with the side clips about 5mm in from the corner radius
3. The goal is all three clips on 3 sides
4. No need to go around the corners.

## Installation

1. &#x20;Remove the AC power supply&#x20;
   1. 4 GND + 1 PWR corner screws `TORX T7`
   2. 2 screws for power connector
2. Place the 3D printed baffle in the power plug opening,
   1. It might snap in, it might not
   2. Holding it in place for a bit with the warmth of your hand may help.
   3. The next step might thank you&#x20;
3. Assemble the mod kit if its not already
   1. The two screws that came with the kit should be through the circuit board and 3D printed insulator. If you're lucky they're still friction fit into place from us and you can take the whole thing out as one piece.
4. With the text up and 3d print down, align the USB-C port with the hole in the shroud we just put in.&#x20;
5. You can then lay the board flat, following the contour of the chip's EMI shield and attempting to align the GND and PWR screws.
6. Fasten the two M2.5 Torx head screws.
7. Plug in any USB-C cable and charger.

## Design Files

Coming Soon

## Changelog

23.04.10

* Tested with 5.1v direct from USB, would not boot. Recovered when given its average 4.7v ish.
* OE PSU was 4.3v, but Diode does about 4.7v and is not super stable based on current draw.
* LDO add-on board designed and ordered.

v1.0 - First run in testing

* Works but some questionable behavior - unable to attribute to mod kit
* voltage is all over the place with diode used... test raw VUSB and optionally test an LDO
  * would love to test max voltage, but that would require breaking my only Apple TV
