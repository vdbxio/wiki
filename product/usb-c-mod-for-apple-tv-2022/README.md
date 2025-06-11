---
description: Power your Apple TV with USB-C
cover: ../../.gitbook/assets/atv-modkit-wiki.jpg
coverY: 0
---

# USB-C Modkit for Apple TV 2022

Illustrated installation instructions are available on [vdbx.io](https://www.vdbx.io/product/usb-c-modkit-for-appletv-2022)

{% hint style="info" %}
**For 2022 / "3rd Gen" Apple TV 4k ONLY.**  Works with both ethernet and Wifi variants. Model numbers A2737 and A2843 as defined here: [https://support.apple.com/en-us/101605](https://support.apple.com/en-us/101605)
{% endhint %}

## Tools Note

{% hint style="info" %}
Torx T7 and T5 are used by Apple, but we've noticed a T6 _should_ manage to get both. **We've included a T6 allen-key with your kit.**
{% endhint %}

## Included in kit:

* 1x Modkit PCB with Linear Regulator
* 3x Guitar picks to open case
* T6 Allen key to remove power supply & power connector
* Connector shroud - `3D Printed`
* Insulating spacer - `3D Printed`
* 2x M2.5x8mm Screws with T6 head
* Quick Start Card

## Summary

The AppleTV seems to have always been the only TV streaming box that isn't powered by a USB cable. This mod kit changes that, keeping a clean unmodified look. Grab any USB-C cable and any charger that can provide about  7 watts or more.&#x20;

## Opening the Apple TV

Use the included guitar picks to open the Apple TV by inserting them into the seam near the bottom edge to release some clips. This can be tricky if you aren't used to it as it is nearly right on the corner and very well hidden.&#x20;

1. There is a slight lip inward and then it goes straight up.&#x20;
2. There are three clips on each edge with the side clips about 5mm in from the corner radius
3. The goal is all three clips on 3 sides
4. No need to go around the corners.

## Installation

1. &#x20;Remove the AC power supply&#x20;
   1. 4 GND + 1 PWR corner screws `TORX T7`
   2. 2 screws for power connector `TORX T5`
2. Place the shroud in the power plug opening,
   1. It _should_ snap in, it might not
   2. Holding it in place for a bit with the warmth of your hand may help.
   3. The next step might thank you&#x20;
3. Pre-assemble the mod kit:
   1. The two holes in the spacer are a bit smaller than the included M2.5 screws
   2. Use this to your advantage to attach the spacer to the circuit board as shown in \[DIAGRAM]
   3. The screw should go through the top of circuit board and into the spacer
   4. The spacer is symmetrical and can be installed in any direction
4. With the text up and 3d print down, align the USB-C port with the hole in the shroud we just put in.&#x20;
5. You can then lay the board flat, avoiding the silver shielding
   1. Align the screw at the tip of the board with the inner of the two screw holes that are near each other.
6. Fasten the two M2.5 screws until snug
7. Plug in any USB-C cable and charger to test
8. Replace cover.

## Design Files

Circuit boards were designed in EasyEDA Pro and are available to fork via OSHWLab:

{% embed url="https://oshwlab.com/clomads/atv4k-usb" %}

3D models were designed in Fusion 360 (not parametric)

{% file src="../../.gitbook/assets/Apple TV USB-C Mod v21.f3d" %}
ddddd
{% endfile %}

## Mesh files for Printing

{% file src="../../.gitbook/assets/Spacer-ATV2022Modkit.stl" %}

{% file src="../../.gitbook/assets/Shroud-ATV2022Modkit.stl" %}

## Change Log

24.06

* Combined external LDO circuit into main board
* Extended ground plane to get final smoothing cap closer to output&#x20;
* Add bottom GND plane and add stitching vias
* Remove unused secondary GND screw mount

23.12.11

* Diode removed from design
* Submitted second batch to use with LDO boards still in stock

d23.05

* LDO add-on board works and will be used to adapt the first batch for retail production
* Re-design with LDO circuit on-board if first batch sells-out

23.04.10

* Tested with 5.1v direct from USB, would not boot. Recovered when given its average 4.7v ish.
* OE PSU was 4.3v, but Diode does about 4.7v and is not super stable based on current draw.
* LDO add-on board designed and ordered.

v1.0 - First run in testing

* Works but some questionable behavior - unable to attribute to mod kit
* voltage is all over the place with diode used... test raw VUSB and optionally test an LDO
  * would love to test max voltage, but that would require breaking my only Apple TV
