# Origami

{% hint style="info" %}
Some names have been redacted to remove unwanted association.&#x20;

`Originally written 12/29/2017`
{% endhint %}

### History

nbPi was initially conceived by Chloe Madison alongside \*\*\*\*\*\*\*\*\* around October of 2017. It is in direct response to projects like Pocket C.H.I.P, Pandora Project, PiGirl/PiBoy and others. It hopes to be an infinitely modular portable computing system based around the Raspberry Pi Zero/W with considerations for other Raspberry Pi boards.

Key Goals:

* Single board backplane design to incorporate all major I/O and connectivity to modules.
* Detachable keyboard and gamepad sections
* stuff and things

## Core Team

* Chloe Madison - @clomads
  * Responsible for design across software and hardware
  * Will focus on keyboard development
* \*\*\*\*\*\*\*\*\*\*\*\*
  * Responsible for software and modifications to a core OS that will allow the nbPi to run as intended
  * Will manage software based add-ons for other potential OS installations.
* \*\*\*\*\*\*\*\*\*\*\*\*
  * Responsible for hardware implementation of the gamepad section of the nbPi board

## Goals

* Single circuit board implementation containing the following
  * Top Section: 'The Brains'
    * FRONT: 3.5" Touchscreen attached via standard GPIO header
    * BACK: Raspberry Pi Zero/W attached via standard GPIO header
    * Extend and label left over GPIO pins for easy access
    * USB Hub connected to RPI0/W via a custom pin header and pogo pins
    * Power delivery and battery charger for 3.7v LiPo batteries -JST Connector for battery -- Micro/USB/C input
    * Audio output header - common pin alignment for off-board audio amps - rotary volume control?
    * Easy access USB ports connected to build in hub circuitry
  * Middle section: 'The Gamer'
    * Gamepad consisting of the following:
    * 4-Way D-Pad
    * Two Analog Joysticks: (PSP1000 part is being considered)
    * A/B/X/Y Button set
    * Start/Select/Home
    * BACK: L/R Shoulder and Trigger
    * Controller - ATMEGA32u4 --> USB
  * Bottom Section: 'The Typist'
    * Full QWERTY Keyboard based on an existing membrane layout
    * Considering v1 to use T-Mobile/HTC G1/Dream keyboard membrane
    * Design shall allow users to re-orient keyboard layout for other membranes and order themselves
    * Controller - ATMEGA32u4 --> USB
* Entire system should be able to be created and used on a single double-sided circuit-board
  * Top/Middle/Bottom sections are scored between their perimeter for modification purposes
    * Connections between boards will be USB only and contain pads for re-connection after board is broken
  * Use any dead space for custom parts that can be punched out - eg. pin-header to pogo pin board for USB hub connection

