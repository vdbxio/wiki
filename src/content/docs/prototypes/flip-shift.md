---
title: Shift Deck
description: 8-in-4 Home Assistant remote and modular switch panel system.
sidebar:
  order: 6
vdbx:
  type: product
  status: prototype
  section: prototypes
  works_with:
    - FLIP_C3
    - Home Assistant
---
# Overview

8-in-4 Home Assistant remote and modular switch panel system. Four dual-throw momentary toggles in a modular wall enclosure and faceplate, driven by a FLIP over I2C and daisy-chainable into larger panels. Working prototype PCB since 2023-11 with a near-complete ESPHome build and a Home Assistant blueprint.

Listed in B - Future Products as the Switch Panel, $69 target. Needs a PCB refresh (encoder footprint, LED alignment, Qwiic connector fix) and enclosure work.

---

![](/attachments/shift-deck-header.jpg)
*December 2023 design & functionality prototype and current features.*

## Latest

- **23.12.14** — Considering design changes to enclosure. Need documentation for PCB-only kits.
- **23.11.12** — Working prototype PCB in testing with nearly feature-full MVP ESPHome build and blueprint to integrate into Home Assistant.

## Summary

A set of four (4) dual-throw momentary toggle switches in a modular wall enclosure and faceplate system. It is designed to work directly with our FLIP platform running ESPHome. It is connected via an I2C interface allowing it also to be daisy chained to itself to create larger switch panels.

**SPDT (Single Pole Dual Throw)** — A dual throw switch has two distinct motions from its center. In a momentary version, it can toggle outward in two directions, for example up/down or left/right based on the physical orientation of the switch. The most common of these is a window switch in a car. Single pole refers to the fact that there is only one bank of connections being switched. While single pole switches may be optimal, dual or triple pole may be necessary due to availability.

## Installation

1. Power up: use a USB-C cable or feed up to 60 VDC to the spring terminals.
2. Connect to the `Unnamed Switch Panel XXXXX` Wi-Fi and enter your Wi-Fi credentials when the prompt comes up.
3. Check Home Assistant for a new device notification, or check the integrations page for the switch panel.
4. Press configure and follow the steps.
5. Import the blueprint and configure it:

[![Open your Home Assistant instance and show the blueprint import dialog with a specific blueprint pre-filled.](https://my.home-assistant.io/badges/blueprint_import.svg)](https://my.home-assistant.io/redirect/blueprint_import/?blueprint_url=https%3A%2F%2Fraw.githubusercontent.com%2Fvdbxio%2Fesphome-configs%2Fmain%2Fblueprints%2Fbiswitch-blueprint.yaml)

:::note[Detailed installation instructions]
Coming Soon™
:::

## User Experience

Dual-throw momentary toggle switches allow for a direct UX comparison to legacy house switches when moving to smart automation systems. Keeping the muscle memory of Up = On and Down = Off is important to a lot of us when much of the IOT landscape is trying to get us to learn new UX patterns.

Spacing between switches was previously a concern, but no longer seems to be an issue. The first prototype has so far proven that spacing is more than adequate.

## Design & Manufacturing

The required depth of the components created a unique opportunity to be bold in our design choices. The spacious cover plate is larger and almost floats on top of the housing which is recessed behind it. In a vacuum, its shape evokes a mid-century modern design aesthetic, though color and material choices could adapt it to any decor.

The cover-plate design is easily manufacturable via 2D machining methods (laser, basic CNC).

The housing is 3D printable with the possibility of injection molding with the right modifications. It could theoretically be bent sheet metal.

## Placement

Originally intended to be mounted to a wall, it seems it may also work well on a desk as it stands up with little issue and could have power coming out the back. This changes some of the design work, but shouldn't be too big a deal.

It was specifically designed so it could live anywhere but in a standard wall box. Blanking plates will eventually be available optionally with and without AC transformers for this possible use, but we encourage an open mind when considering placement. Get one of those outlets with USB ports and put the switch panel next to it with a slim USB cable (see Resources).

~~The rear of the housing is mostly open, but there are two areas that can be used for VHB or nano-style double-sided tape. Next to each one of those areas is a hole for screw mounting.~~

Back should be closed, but interior markings could show where to make holes for certain things like mounting screws or alternate cable passthrus — should have a default cable passthru for USB-C.

When screw mounting, remove the cover-plate screws and mount the housing first, then re-attach the cover-plate and screws.

## Specs

Hardware

- Based on PCF8574 IO expander, default address `0x20`
  - 8 pins for switch 1–4 up/down
  - Up to 8 panels on the same I2C bus via 3P DIP switch
- Qwiic & Stemma QT compatible 4-pin headers for expansion
- PT/FLIP module accepts USB-C or up to 60 V DC — great for RVs or off-grid
- Designed to be as compact as possible for custom designs

ESPHome

- ESP32-C3, ESP-IDF platform
- Four switches are presented as eight `binary_sensor`s for single-click actions; ESPHome functions can present multi-click and hold
- Base binary sensors should be set as internal to run a text sensor as a state machine for each switch. Can be rewritten for vertical orientations or use a select box as an if variable.
  - Up, Down
  - 2x Up, 2x Down
  - Up Hold, Down Hold
- Two-step setup in Home Assistant: adopt the device when it joins Wi-Fi, then import the blueprint (see Installation)

:::note[Base ESPHome config]
```yaml
# Some code — base config to be published with the esphome-configs repo
```
:::

## Dimensions

Early prototypes were very scattered, so here we rebase the geometry to build it parametrically.

- Switches
  - On center — 18 mm
    - Hole dia — 6 mm + 0.2 mm
- LED diffuser
  - X/Y/Z — 50/100/3 mm
    - Radius — 20 mm
- Cover-plate
  - X/Y/Z — 60/110/3 mm
    - Radius — 15 mm
  - Screw spacing — 80.551 (fix)
    - Hardware ×2
      - M3 or #6 thread-cutting
      - Hole dia: 3 mm + 0.2 mm
- Enclosure
  - Thickness
    - 1.2 mm — printed in PETG with a 0.6 nozzle presents excellent results that print super fast (13 min), but the floppiness of the part could be concerning to people.
  - X/Y/Z — 50/100/
    - Small side offset —
    - Radius — 20 mm
    - Holes:
      - 3 mm for coverplate — 2
      - Drill marks for wall mounting — 2
        - On center —

## Resources

- [Thin USB-A to C cables](https://s.click.aliexpress.com/e/_DefEShP) for placing next to an outlet with USB ports
- [Thin C to C cable](https://s.click.aliexpress.com/e/_DDbsYx7)

*Affiliate links don't change your price, but give us a small percentage of sales.*
