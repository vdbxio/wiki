---
description: Quickly get 5v from those old Micro-USB cables you have lying around.
---

# USB-BD v1.4

[![licensebuttons by](https://licensebuttons.net/l/by-sa/3.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)

![](https://img.shields.io/badge/2023-v1.4-blue?style=for-the-badge)

[![oshwa](https://img.shields.io/badge/US000128-OSHWA-blue?style=for-the-badge)](https://certification.oshwa.org/us000128.html)

`A Type-C variant is on its way, so let us know what you'd like to see`

## USB-BD

A handy Micro-USB power and data breakout designed for breadboards, but useful in all kinds of projects. Put that drawer full of micro USB cables to good use.

![Features Overview Diagram](https://raw.githubusercontent.com/vdbxio/USB-BD/master/git-docs-features-dark.png)

### Summary

The USB-BD breaks out the Micro-USB 5v vbus and data pair to standard pin headers on a 2.54mm/0.1" pitch grid. The pin headers are on opposite sides of the Micro-USB port for stability and strength when in used on a breadboard. A slide switch is optionally used to switch both 5v+ terminals simultaneously, otherwise solder the PWR jumper on the bottom to bypass the need for a switch and give yourself current capability boost.

`The switches are limited in that they are technically only rated for 200mA. We have seen them work at higher currents, but for how long? We are still testing.`

`The 5v rail requires the switch or the PWR jumper to be soldered in order to get it to the two 5v+ connections.`

If you require the data pins in conjunction with a breadboard, we suggest not using the 5v pair next to it, but the 5v pair on the other side, next to the switch, is still useable. In this configuration the USB-BD can be placed across the center break of the breadboard giving you Data + & - on one side and 5v + & - on the other.

The OTG solder jumper on the bottom pulls the ID pin to ground. It is there for your development needs. Have fun.

### Open Source

The USB-BD is open source and this git repo is intended as the main source of truth, though there may be varying info elsewhere as things change quickly. Feel free to ask us any questions in the issues tab above, we'd love to hear your feedback on how we can improve.

### Manufacturing

We currently have JLCPCB manufacture the USB-BD v1.4 with packing and logistics handled in California. They are currently being sold in 5-packs on Tindie with free shipping in the USA and are working to get them back on Amazon.

Previous versions were pick & placed by hand with a significant error rate.

### Background

By: Chloe Madison (@clomads)

I've always found myself doing electronics projects that require 5v... and specifically 5v from USB. It's always been a pain to get 5v from a USB port... the 5 pin breakouts from AliExpress and other sources are usually junk and you still have to wire back up to your power rails. The power supplies I've seen on Amazon and AliExpress are usually some large monstrosity that bridges the two paralell sides of the breadboard (why?) and require a barrel jack connector at some weird voltage.... again... why? If you're like me, you have a million Micro-USB cables laying around and the power bricks to go with them. Let's use them for making stuff. Since creating v1 back in 2018, I've used these all over the place to bypass alkaline batteries, power micro-controllers, and even partially replace the guts of a broken USB fan .... a neat tool to make even cooler things and I hope you find it as useful as I have.

USB-BD doesn't actually mean anything. It was a silly name an ex called them when I was first designing them. Pronounced "US Bibbity" I also call them "BBDs" for short.

### Files

The USB-BD is currently being developed in EasyEDA Pro. The link below will take you to the public project where you can inspect and fork the schematic and board layout.

[https://oshwlab.com/vdbxio/usb-bd-1-4](https://oshwlab.com/vdbxio/usb-bd-1-4)

### TODO

* Add exports to repo for backup and/or conversion to other formats.
* More useage diagrams

### Version history

2023.2 (v1.4) - Swap push switch for slider switch, swap data JST2.0 for 2.54mm pin header, PWR jumper on bottom, JLCPCB

v2.0 Prototype - Jan 2020 - Major redesign - Two position Micro-USB footprint, Nix JST for aligned 2.54mm pins for data, Simpler switch

v1.0a/v1.1 - Changed footprint to LCSC USB port and made slight modifications to the silk layer.

v1.0 - Initial release - First batch with short horn USB port from AliExpress

### Changelog

March 2023

* Finalize updated README
* Finalize package label design
* Design flat feature diagram

Feb 2023

* Design and submit production order
* Recieve order and begin testing
* Packaging and documentation design work start

Jan 2023

* Posted final v1.1 stock to Tindie and updated resources.
* Started research on v1.4 changes and JLCPCB assembly pricing
* Pushing off v2.0 version with dual position port
  * Keep switch replacement and new data alignment

[![I sell on Tindie](https://d2ss6ovg47m0r5.cloudfront.net/badges/tindie-smalls.png)](https://www.tindie.com/stores/vdbxio/?ref=offsite\_badges\&utm\_source=sellers\_clomads\&utm\_medium=badges\&utm\_campaign=badge\_small)
