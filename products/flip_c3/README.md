---
description: An ESP32-C3 with a 50+v tolerant 5v/2A buck converter & other special sauce.
cover: ../../.gitbook/assets/Flip C3-header.jpg
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# FLIP\_C3

{% hint style="warning" %}
June 24, 2024 - We are almost out of our v1.0 boards and are finalizing the design of v1.1. The major enhancement in v1.1 is the addition of TVS protection, enabling full 60V compatibility without any caveats. This transient suppression will enhance stability across the entire voltage range and generally strengthen the input side. It will reduce or eliminate failures from hot socketing in daughterboards and protect against damage from intermittently failing circuits, frayed wires, and shorts. High-vibration environments may find use, but ultimate endurance has yet to be tested.
{% endhint %}

## Summary

The first mainboard for the FLIP platform is an ESP32-C3 board that can be deployed on any battery system from 6-50\* VDC. It is designed for use with ESPHome, but can be flashed with other popular firmwares such as TASMOTA and WLED. We have a whole line of smart products based on this as their main powerhouse.

Available for sale: [https://www.vdbx.io/product/flip-c3](https://www.vdbx.io/product/flip-c3)

## Specs & Features

* On-board 5v/2A buck-converter tolerant **up to 50+v DC**
  * &#x20;<mark style="background-color:red;">\*60v absolute max, but do not live connect over 50v (v0.x.x - v1.0.x)</mark>&#x20;
    * Connect to battery when it is low
    * Use a low value resistor to pre-charge circuit (pro move)
* Low-profile press-in wire connector for DC input
  * 24-16AWG Solid
  * 22-18AWG Stranded - Ferrules are suggested
  * 2x2P 2.54mm pass-through power header for stacking
  * Push release spring mechanism
* **ESP32-C3** designed for ESPHome and Home Assistant.
* **USB-C** input for alt power and programming
  * Reverse current protection from DC input via diode&#x20;
    * No data connection while powered by DC
* LEDs on-board
  * **WS2812B RGB** - `GPIO8`
    * Digital output available on header as `L8` to drive short runs&#x20;
  * Red Status LED - `GPIO10`
* UART and I2C on **Qwiic/Stemma QT** compatible headers (SH 1.0-4P)
  * I2C:  `SCL0/SDA1`
  * UART:  `RX20/TX21`
* Boot Button `GPIO9`
* Reset Button `ENABLE`

### ESP32-C3

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500.

Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C bus, but we'll cross that bridge when we come to it.

## Pinout

<figure><img src="https://cdn.jsdelivr.net/gh/vdbxio/wiki@main/pcbs/flipc3-pinout.drawio.svg" alt=""><figcaption><p>Pinout of the FLIP_C3</p></figcaption></figure>

## License & Files

The FLIP\_C3 is offered as open source under the [Creative Commons 4.0 Attribution Share-Alike License](https://creativecommons.org/licenses/by-sa/4.0/) (CC 4.0 BY-SA)

### PCB

Original design was created in EasyEDA Pro and is available to modify and fork via its listing on OSHW Lab:

{% embed url="https://oshwlab.com/vdbxio/flip_c3" %}
OSHWLab/EasyEDA Project Page
{% endembed %}

### 3D Model

EasyEDA provides a STEP file of the board which we bring into Onshape, align a vector of the silkscreen, and extrude it slightly. No bottom silkscreen at the moment. Download most formats from Onshape link:

{% embed url="https://cad.onshape.com/documents/af00e36867ef843934780936/w/5d9eced028a93600ceebb907/e/d9cc1846766a213fe9bc7628?renderMode=0&uiState=667dd6b0e3a6775cdf3a3ecc" %}
Onshape 3D Model - 23.08 / 23.09 / 24.01
{% endembed %}
