---
title: Le'Fob
sidebar:
  order: 7
vdbx:
  type: product
  id: VBX2690
  status: prototype
  section: prototypes
  hero: /attachments/3D_LeFob_2026-09-16%20(2).png
  works_with:
    - Home Assistant
---
# Overview
Le'Fob is a four button bluetooth remote designed to act as a key fob or integrated into other button interface designs. Using the BTHome spec, Le'Fob presents its buttons and telemetry in Home Assistant allowing you to build automations against press, double-press, triple-press, long-press, & hold gestures for each button. 

Currently have proof of concept hardware with LLM assisted firmware builds proving concept. Join our discord to see if you can get your hands on test hardware. 
# Specs

- CH592 RISC-V BLE
- 4x Button interface
	- WS2812-V6 per button
- USB-C Battery Charging
	- Configurable over I2C
- Battery Fuel gauge (not implemented yet)
- 2x N-Mos Controlled LED Flashlight
	- alternately replace with brighter LEDs
	- alternately replace with IR LED
- Experimental: I2C OLED Header - More to come

# Tasks
- [x] Validate Base hardware ✅ 2026-09-16
- [x] BTHome Buttons basic firmware ✅ 2026-09-16
- [ ] Encryption
- [ ] Configuration Channel
- [ ] Web Configurator Basic
- [ ] Le'Configurator
- [ ] Response Chirps
- [ ] Second spin

# Changelog

- 2026.8 - First run notes:
	- confirmed ~30µA sle
	- Reverse silkscreen button numbers
		- Aligns top to bottom with Home Assistant
	- Add Fuel gauge
		- remove direct shunt
	- remove NTC
