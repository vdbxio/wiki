---
description: 500A Smart Shunt for Home Assistant
---

# PwrTool 500

<figure><img src="../../.gitbook/assets/pwrtool500-wiki-features2312.jpg" alt=""><figcaption><p>PwrTool Hardware as of Dec 2023</p></figcaption></figure>

{% hint style="info" %}
We've recently started using this ESPHome component and thank the author for the work they've done.

[https://github.com/latonita/esphome-ina228](https://github.com/latonita/esphome-ina228)
{% endhint %}

{% hint style="success" %}
24.04.10 - We've been accepted to do a crowdfunding campaign with Crowd Supply. More details coming soon - expect updated docs as we lock in final details.
{% endhint %}

## Overview

A 500 amp smart shunt for DC power systems up to 60v\* ([50v for now](../flip\_c3/)). It is based on our FLIP-C3 mainboard and power center running ESPHome for seamless integration with Home Assistant out of the box.&#x20;

An on board 45w NPN MOSFET can power fans, LED strips, or control external relays based on automations in Home Assistant. Also keep an eye on the ambient temp/humidity of your control box with the onboard sensor and catch potential issues with the on-die temp sensor of the analog-to-digital converter IC.

PwrTool 500 is fully open, this is your hardware and it is fully hackable. Extend it further with ESPHome, Tasmota or your own custom Arduino or ESP-IDF code. The on-board buck converter provides a total power budget of 10w for all of the activities. Make the PwrTool the brains of your power cabinet.

## Features

* Hot or Cold Side use
  * Current beta hardware uses a switch - make sure it is in the correct position - no silkscreen
  * `TODO:`Polarity correction via H-bridge
* Up to 60VDC\* - works on up to 16s LiFePo4 systems
  * Bi-directional current and power up to 500A
  * Temp sensor on die placed near shunt fins
* SHTC3 Temperature & Humidity Sensor for environmental monitoring
* RGB LED & Red Status LED
* `CTRL-` Connection for external control via NPN MOSFET

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
