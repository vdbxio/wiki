---
title: PwrTool 500
description: 500A Smart Shunt for Home Assistant
sidebar:
  order: 3
vdbx:
  type: product
  id: VBX2350
  status: production
  section: products
  msrp: 149.95
  hero: /attachments/667dea72eac45e565979f3ef_2406-PwrTool500-cover-3dp-p-500.png
  works_with:
    - FLIP_C3
  buy:
    - label: Pre-order on Crowd Supply
      url: https://www.crowdsupply.com/voidbox-industries/pwrtool-500
---
![](/attachments/pwrtool500-wiki-features2312.jpg)
*PwrTool Hardware as of Dec 2023 (Some info out of date)*

# Overview

A 500 amp smart shunt for DC power systems up to 60v. It is based on our FLIP-C3 mainboard and power center running ESPHome for seamless integration with Home Assistant out of the box. 

An on board 45w NPN MOSFET can power fans, LED strips, or control external relays based on automations in Home Assistant. Also keep an eye on the ambient temp/humidity of your control box with the onboard sensor and catch potential issues with the on-die temp sensor of the analog-to-digital converter IC.

PwrTool 500 is fully open, this is your hardware and it is fully hackable. Extend it further with ESPHome, Tasmota or your own custom Arduino or ESP-IDF code. The on-board buck converter provides a total power budget of 10w for all of the activities. Make the PwrTool the brains of your power cabinet.

# Installation

Follow wiring instructions and then look for device in your Home Assistant Integrations.

### Wiring Example

The basic installation of the PwrTool 500 puts it inline with the negative terminal of your battery and it's loads/chargers. Use properly sized cables for the devices you intend to connect. 

<img src="/attachments/2406-wiring-diagram-pwrtool-1610_jpg_md-xl.jpg" alt="" width="457" />

more examples in [2024.10-pwrtool-manual.pdf](/attachments/2024.10-pwrtool-manual.pdf) and 

# Features

* Hot or Cold Side use
  * Selectable by twisting jumper position
  * Polarity and TVS protection
* 6-60VDC - Compatible with any lithium or lead-acid system
  * Bi-directional current sensing up to 500A(300A contstant)
  * INA238 16-bit ADC with on-die temp facing shunt
* SHTC3 Temperature & Humidity Sensor for environmental monitoring
* RGB LED & Red Status LED
* `MOS -` Connection for external control via 45w NPN MOSFET

## Specifications

* FLIP_C3 Mainboard
  * BLE 5.0 & Wifi b/g/n
  * 5v2A (10w) buck converter
  * ESP32-C3
    * Internal temp sensor
* GPIO Components
  * Red "Status" LED - GPIO 10
  * WS2812 NeoPixel - GPIO 8
    * Level-shifted output on header as L8
  * User/Boot Switch - GPIO 9
  * Reset Switch - EN Pin
* i2C Bus
  * SCL - GPIO 1
  * SDA - GPIO 0
  * Addresses
    * INA238 - 0x40
      * changeable with on-board DIP switch
    * SHTC3 - 0x70

# Open Hardware

The PwrTool 500 is open source and files are provided under CC4.0-BY-SA

### EasyEDA Pro

Schematic, Board, & BOM are originally created in EasyEDA pro. Also see [FLIP_C3](/products/flip_c3/) files.

[ProDocument_PWRTool 500_2024-05-11.epro](/attachments/ProDocument_PWRTool%20500_2024-05-11.epro)
EasyEDA Pro file*

### 3D Models

coming soon

# Open Software

### ESPHome

We are building out a modular set of configuration files for our FLIP_C3 platform and the products it powers. They are currently available on github here:

https://github.com/vdbxio/esphome-configs

# Extra Features

## Polarity

Most shunts of its type are "low-" or "cold-" side only, meaning the shunt itself is inserted in the ground path of your system. In some circumstances it may be difficult to intercept the ground path in a way that produces accurate results so we've built in an option to switch the PwrTool 500's polarity. The "hot-" or "high-" side mode will allow you to intersect the positive line to your load or battery.  

**This should be selected before wiring** and is factory set to Cold. Do not use a metal object to remove the jumper. 

## Delta Readings as a Battery Monitor

In this configuration, current sensing will only be that which flows into and out of the battery. Reading will be the delta between loads and chargers. For example **if charging at 100 watts with a 50 watt load, the reading will be 50 watts charging.** If you want to see the actual charging and load readings you will need to compare it to other data you have in your system, such as a solar charge controller, or use additional PwrTool 500s to separate loads and chargers.

## Comparison

These are all the direct market competitors to the PwrTool 500.

|                        | PwrTool 500                                                                                                      | Victron SmartShunt 500                                                       | Thornwave PowerMon                                                                                                          | REDARC Smart Battery Monitor                                                                                      | LNEX AirShunt 500                                                                                                              |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Current (Max/Const)    | 500A/300A                                                                                                        | 500A/300A                                                                    | 500/?                                                                                                                       | 500/?                                                                                                             | 500/?                                                                                                                          |
| Voltage                | 6-60v                                                                                                            | 6.5-70v                                                                      | up to 32v (v3.0) / 72v (v3.1)                                                                                               | 9-32v                                                                                                             | 8-100v                                                                                                                         |
| Polarity[^1]           | Hot/Cold (Selectable[^2])                                                                                        | Cold Only                                                                    | Hot Only                                                                                                                    | Cold Only                                                                                                         | Cold Only                                                                                                                      |
| Wireless               | Wifi + Bluetooth for provisioning                                                                                | Bluetooth                                                                    | Bluetooth                                                                                                                   | Bluetooth                                                                                                         | Bluetooth                                                                                                                      |
| User Interface         | Home Assistant; built-in web server                                                                              | Android/iOS App                                                              | Android/iOS App                                                                                                             | Android/iOS App                                                                                                   |  <mark>APPS MISSING</mark>                                                                       |
| Expansion              | I2C, SPI, UART, LED, GPIO                                                                                        | VE.direct (custom UART, documented)                                          | Proprietary Bluetooth Touchscreen Only                                                                                      | R-Bus / CAN (Undocumented)                                                                                        | UART (Undocumented)                                                                                                            |
| Firmware               | ESPHome(Default) or custom code via Arduino/ESP-IDF                                                              | Proprietary                                                                  | Proprietary                                                                                                                 | Proprietary                                                                                                       | Proprietary                                                                                                                    |
| Hardware               | ESP32-C3 + INA238 + SHTC3                                                                                        | Proprietary                                                                  | Proprietary                                                                                                                 | Proprietary                                                                                                       | Proprietary                                                                                                                    |
| Temperature            | SHTC3 on front w/Humidity; Sense IC die temp facing shunt;   External Optional                                   | External Optional                                                            | External DS18B20 via proprietary connector                                                                                  | External on included B+ cable?                                                                                    | External Included                                                                                                              |
| External Voltage Sense | Optional via GPIO                                                                                                | Yes                                                                          | Yes                                                                                                                         | No                                                                                                                | Yes                                                                                                                            |
| DC Power Conversion    | 5V/2A (10w) Buck + 3.3V/1A Linear regulator                                                                      | Internal only                                                                | Internal only                                                                                                               | Internal only                                                                                                     | Internal only                                                                                                                  |
| Load Control           | N-MOS up to 45w (TBD) with PWM control: Lighting, Relay, SSR, etc                                                | No                                                                           | MOSFET for external relay or SSR                                                                                            | with compatible external control system                                                                           | No                                                                                                                             |
| LEDs                   | On-board WS2182b with level-shifted output on GPIO; On-board red status light                                    | Bluetooth; Error Status                                                      | None                                                                                                                        | Bluetooth Staus                                                                                                   | Bluetooth; Warning Status                                                                                                      |
| Buttons                | Boot (GPIO9) - Usable in Home Assistant; Reset; GPIO expandable                                                  | None                                                                         | None                                                                                                                        | Bluetooth Control                                                                                                 | None                                                                                                                           |
| Documentation          | Open source updateable wiki managed by VDBX.io                                                                   | Manual, dimensional drawings, datasheet on website                           | Have to google for manual which is on external site, main website lacks clarity                                             | Manual on website                                                                                                 |  <mark>No website or manual available</mark>                                                     |
| Price - USD            | $149                                                                                                             | $129                                                                         | $139                                                                                                                        | $189                                                                                                              | $69                                                                                                                            |
| Vibe Check             | Extensible & Hackable Open Hardware + 16-Bit ADC + Environment Sensor. Works with Home Assistant out of the box. | Industry standard but limited to proprietary app without external hardware.  | The only hot-side shunt in this category. Another proprietary bluetooth app. Only compatible with Thornwave control system. | Marketed for overlanding with "rugged" design - only compatible with REDARC control system and a proprietary app. | DO NOT BUY - The app has vanished in 2023/24 and their website hasn't been around for years. Zero support but still on Amazon. |
