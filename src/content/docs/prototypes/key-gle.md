---
title: Key-Gle
description: The USB-C Keyboard Dongle
sidebar:
  order: 8
vdbx:
  type: product
  status: idea
  section: prototypes
---
## Overview

A three-button macropad that sits flush with any USB-C port. Based on an 8051 core from WCH, it's configurable and upgradeable via a web UI in Chrome or Edge. 3 layers + 3 sub-layers x 3 Buttons per layer.

Hardware validated with nearly complete firmware and web-config built with Cursor Composer 2.5 - Final touches needed on blob layout to allow for string dumps and simple macro-scripts. User flash blob is limited to 128 bytes, so we're working to pack as much as possible in there. I'm currently switching from Cursor to Claude Code, so i'll have to backfill context into new agent. 

![](/attachments/Hand%20Holding%20Device.png)
![](/attachments/keygle-ui-2607.png)

:::caution[Uh-oh!]
Buttons have self-disassembled from extreme handling on one prototype. Pondering enclosures. Would you use it naked?
:::

## Specs

- CH552 - E8051 - 24Mhz
	- 256B iRAM
	- 1KB xRAM
	- 128B User Data Flash
- 3x Tactile Buttons
- 1x WS2812 RGB Addressable LED
- USB-C

## Tasks
- [ ] Get back to building firmware and configurator
- [ ] Second spin
	- [ ] convert to KiCAD?
	- [ ] remove boot & reset buttons
	- [ ] remove CC2 5.1k
- [ ] Case Tests
	- [ ] too small for FDM 3D printing?
	- [ ] talk to silicone manufacturers 
		- [ ] DIY?
	- [x] Plastidip? NO! ✅ 2026-09-26

## Changelog
See date code on PCB
- 2026.7 - First run 10 units
	- Issues:
		- remove one 5.1k for plug side usb
		- boot & rst buttons are useless - boot can be smd jumper for paperclip
	- Consider alternate buttons?
	- Case tests still pending
## More Stuff

Packaging Mockup

![](/attachments/key-gle-mockup-1.png)

Simple case design for flexible material like silicone, this would be ultimate design, need to look into possibilities. 
![](/attachments/key-gle_case_render.png)
