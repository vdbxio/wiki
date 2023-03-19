---
description: For Motherboards
---

# Super-Ultra Low-Profile USB 2.0 Header

## Summary

A USB header for PC motherboards designed to be as minimal as possible. It may interfere with components on some motherboards. Its intended use is for keeping small flash-drives, wireless controllers, or USB license keys inside a computer enclosure.

It can also be a powerful tool for computer techs who can keep two USB tools together such as a diagnostics OS on flash drive alongside a wireless keyboard/mouse receiver.

My personal use case is in a custom built super slim NAS enclosure that runs UnRAID. My OS is on a tiny flash drive and the second slot holds a 2.4ghz receiver for a thumb keyboard/trackpad thing. All current offerings I could find were too tall for my needs or were a wired assembly, this is much cleaner.

## ROADMAP

2018.11.28 - Version 2.0 of the Super-Ultra Low-Profile USB Header will be designed for improved manufacturability and reliability of source components. V1.0 used a 2x5p through-hole header that was difficult to solder in this configuration. Main change will be to replace the through-hole 2x5p with an SMD version that allows for a reduction of about 1mm of height and no need to solder under USB ports. A new source will be found for the USB ports if possible.

Things to note: The SMD headers will allow the pins from the motherboard to potentially go through the header and rest in a through-hole on the board, stopped only by the USB port on the other side. How far the pins go into the header (and subsequently the PCB) is determined by pin length and the height of the header. Datasheet for a current working part suggests a 7.5mm standoff from the board. Considering a standard header pin is about 6mm, we already have 1.5mm extra space. Add in the board thickness of 1.6mm and we can theoretically look for SMD passthrough headers with a height of 4.4mm!!!!!!!

Current working BOM

[https://www.mouser.com/ProductDetail/855-M20-7870546](https://www.mouser.com/ProductDetail/855-M20-7870546) [https://www.aliexpress.com/item/1X-Double-USB-Short-body-type-USB-Jack-A-female-180-degree-DIP-Vertical-USB-Connector/32665227649.html?spm=a2g0s.9042311.0.0.27424c4d3KeD5w](https://www.aliexpress.com/item/1X-Double-USB-Short-body-type-USB-Jack-A-female-180-degree-DIP-Vertical-USB-Connector/32665227649.html?spm=a2g0s.9042311.0.0.27424c4d3KeD5w)

## Releases

2018.11.28 - Freeze V1 - see release notes

## Build of Materials

* Vertically Aligned Double USB-A Socket (Shortest Possible) - Avalable on AliExpress
* 2x5 Socket Header 2.54mm Spacing - Avalable on AliExpress
* VDBX.io ULPUH PCB - [https://easyeda.com/clomads/usb-header-for-motherboard](https://easyeda.com/clomads/usb-header-for-motherboard)
* Black Silicone (Optional) - Available on Amazon or your local hardware store

TODO: Links

## Assembly

You will need to shorten the leads on the 2x5 Socket Header so the USB Socket will fit flush on the other side. This can be done with snips, but I find it best to sand the pins down with a disc sander and low grit sandpaper (60/80). You will likely mess up a few at first with either method but the goal is to get the pins to be slightly shorter than the board is thick.

Solder the header on making sure its solder joints are secure and as flush as possible on the top.

Solder the USB-A Socket on and clean up its connections. Use snips if necessary.

Fill the alignment pin socket with silicone and let it cure.

Use it - PLug it into the USB 2.0 header on any\* motherboard.

* I have not tested this on every motherboard but I assume it should fit most. On mine, it blocks a portion of the F\_Audio header which may prove difficult if I choose to use it, though there is plenty of clearance to prevent a short.

TODO: Embed photo of it on my motherboard.

Licensed CC-BY-SA 4.0
