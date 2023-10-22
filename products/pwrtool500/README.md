---
description: 500A Smart Shunt for Home Assistant
---

# PwrTool 500

{% hint style="warning" %}
* The INA237 component for ESPHome is currently in development and testing here: [https://github.com/vdbxio/ina237](https://github.com/vdbxio/ina237)&#x20;
* The hardware we are testing on is available at a discount on[ vdbx.io](https://www.vdbx.io)&#x20;
{% endhint %}

## Overview

A 500 amp smart shunt for DC power systems up to 60v. It is based on our FLIP-C3 mainboard and power center running ESPHome for seamless integration with Home Assistant out of the box. An on board 45w NPN MOSFET can power fans, LED strips, or control external relays based on automations in Home Assistant. Also keep an eye on the ambient temp/humidity of your control box with the onboard sensor and catch potential issues with the on-die temp sensor of the analog-to-digital converter IC.

Unlike our competitors, this is your hardware and it is fully hackable. Extend it further with ESPHome, Tasmota or your own custom Arduino or ESP-IDF code.

## Features

* Hot or Cold Side use (comes set to cold side via switch or jumper\*)
  * Current beta hardware uses a switch - make sure it is in the correct position
* Up to 60VDC Voltage works on up to 16s LiFePo4 systems
  * Bi-directional current and power up to 500A
  * Temp sensor on package placed near shunt&#x20;
* SHTC3 Temperature & Humidity Sensor for environmental monitoring
* RGB LED & Red Status LED
* `CTRL-` Connection for external control

## Specifications

* FLIP\_C3 Mainboard
  * BLE 5.0 & Wifi b/g/n
  * 5v2A - up to 60v buck converter
  * ESP32-C3
    * Temp Range: -40 to 105 °C
    * Internal temp sensor
* GPIO Components
  * Blue "Status" LED - GPIO 10
  * WS2812 NeoPixel - GPIO 8
  * User/Boot Switch - GPIO 9
  * Reset Switch - EN Pin
* i2C Bus
  * SCL - GPIO 1
  * SDA - GPIO 0
  * Addresses
    * INA237 - 0x40
      * changeable with on-board DIP switch
    * SHTC3 - 0x70
