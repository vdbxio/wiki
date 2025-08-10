---
description: An ESP32-C3 with a 60v tolerant 5v/2A buck converter & other special sauce.
cover: ../../.gitbook/assets/Flip C3-header.jpg
coverY: 0
---

# FLIP\_C3

{% hint style="success" %}
v1.1 is fully compatible with 60v DC input with the major change being the addition of a bi-directional TVS diode on the input.&#x20;

This transient suppression will enhance stability across the entire voltage range and generally strengthen the input side. It will reduce or eliminate failures from hot socketing in daughterboards and protect against damage from intermittently failing circuits, frayed wires, and shorts. High-vibration environments may find use, but ultimate endurance has yet to be tested.
{% endhint %}

{% hint style="danger" %}
1.0.x versions and earlier are susceptible to transients when connected live (including switching) to over \~50v causing permanent damage to the buck converter.  Allow your battery to discharge before connecting. You may install a TVS diode in paralell with one of the input capacitors or use a pre-charge resistor to reduce these transients.&#x20;
{% endhint %}

## Summary

The first development board for the FLIP platform is an ESP32-C3 with a  60v tolerant buck converter meant for use with 12-48v battery systems.  It is designed for use with ESPHome and Home Assistant, but can be flashed with other popular firmwares such as TASMOTA and WLED.&#x20;

## Specs & Features

* On-board 5v/2A buck-converter tolerant **up to 60v DC input**
  * **V1.1 -** Full 60V input tolerance with transient suppression
  * &#x20;**v0.x.x - v1.0.x** - 60v absolute max, do not live connect over 50v
    * Connect to battery when it is below 50v
    * Install TVS in parallel with input capacitor
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

The ESP32-C3 is considered a market replacement for the ESP8266 while bringing some features from the ESP32. It's a RISC-V platform with Wifi & Bluetooth plus support for Ethernet PHYs including the LAN8720 and W5500.&#x20;

Our early planned product line should be more than covered by the capabilities of the C3... the biggest concern being limited to one I2C bus, but we'll cross that bridge when we come to it.

## Pinout

<figure><img src="https://cdn.jsdelivr.net/gh/vdbxio/wiki@main/pcbs/flipc3-pinout.drawio.svg" alt=""><figcaption><p>Pinout of the FLIP_C3 - Ignore call-out on v 1.1</p></figcaption></figure>



<table><thead><tr><th width="167">Pin Label</th><th width="71">GPIO</th><th>Notes</th></tr></thead><tbody><tr><td>5v</td><td></td><td>5V/2A from buck converter</td></tr><tr><td>3v3</td><td></td><td>3.3V/1A from linear regulator</td></tr><tr><td>SDA1</td><td>1</td><td>GPIO1 - Used as SDA on StemmaQT/Qwiic Connector and FLIP header compatible daughterboards</td></tr><tr><td>SCL0</td><td>0</td><td>GPIO0 - Used as SCL on StemmaQT/Qwiic Connector and FLIP header compatible daughterboards</td></tr><tr><td>RX20</td><td>20</td><td>Hardware UART RX - Reassignable</td></tr><tr><td>TX21</td><td>21</td><td>Hardware UART TX - Reassignable</td></tr><tr><td>LED10</td><td>10</td><td>Not connected to header pin</td></tr><tr><td>LED8</td><td>8*</td><td>*Connected to header via DOUT of onboard WS2812 for level shifting</td></tr><tr><td>9/BOOT</td><td>9</td><td>Hold button on boot to force bootloader mode - available as GPIO or on-board button in software</td></tr><tr><td>RESET</td><td>EN</td><td>Pulls EN pin low while pressed</td></tr><tr><td>2 - 7</td><td>2-7</td><td>GPIO Pins, check ESP32-C3-MINI-1 docs for special functions</td></tr></tbody></table>

## License & Files

The FLIP\_C3 is offered as open source under the [Creative Commons 4.0 Attribution Share-Alike License](https://creativecommons.org/licenses/by-sa/4.0/) (CC 4.0 BY-SA)

### PCB

Original design was created in EasyEDA Pro and is available to download for yourself here. Recent versions of KiCAD should be able to import this, but you'll need to connect your own component libraries.

{% file src="../../.gitbook/assets/ProDoc_FLIP_C3_2024-10-24.epro" %}
EasyEDA Pro File - v1.1 - Exported 2024.10.24
{% endfile %}

### 3D Model

EasyEDA provides a STEP file of the board which we bring into Onshape, align a vector of the silkscreen, and extrude it slightly. No bottom silkscreen at the moment. Download most formats from Onshape link:

{% embed url="https://cad.onshape.com/documents/af00e36867ef843934780936/w/5d9eced028a93600ceebb907/e/d9cc1846766a213fe9bc7628?renderMode=0&uiState=667dd6b0e3a6775cdf3a3ecc" %}
Onshape 3D Model - 23.08 / 23.09 / 24.01
{% endembed %}
