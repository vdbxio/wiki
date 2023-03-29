---
description: 4x N-Channel MOSFETs designed to fit on common PCA9685 modules
---

# PWM Lighting Adapter

## Overview

An extremely simple test of using a commonly available PCA9685 module to modulate low-power LEDs like DC puck lights.  Each module has 4 N-channel MOSFETs rated at a max power dissipation of 7w and were chosen without much knowledge of how to choose MOSFETs.

A handful of these have been in service for over a year without issue, but only seem to be useful for puck lights and short LED strips. Much more capable MOSFETs are available in a similar package size.

This is likely a stepping stone to better design. It answered a lot of questions while in use.

## Problems

The intent of these boards were to improve ease of deployment, but there are several issues with this design.

* Output is intended for 2.54mm 1x2P pin headers requires crimping dupont connectors if they aren't already installed or wiring needs to be extended.
  * Lesson: Don't design to what's on hand - re-ordering the same thing presented a different connector.
* Soldering the board was a pain
  * The last pin header was oriented at a right angle to the rest requiring a separate 2p header
  * Was originally designed for individual sets of 2p headers for some reason
  * The 4P female headers were also hard to solder due to diving board effects.
  * Screw terminals suck in general - always use spring connectors moving forward.
* Mounting wasn't taken into account
  * A DIN Rail adapter was designed for the PCA9685 board, but it was only implemented in one deployment.
* Cable management wasn't taken into account
  * Eventually using right angle pin headers helped with this, but still a PITA
* Silkscreen wasn't clear about polarity
  * Constantly checking other boards or docs when changes are made

## Design Files

This project was made in EasyEDA and will be available via OSHWLab

TODO: Links
