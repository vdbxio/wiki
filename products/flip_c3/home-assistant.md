---
description: Get Started Quickly
---

# Home Assistant

## WiFi

Upon powering your FLIP\_C3 via the DC connector or the USB-C port, it will flash a red LED and create a WiFi network named `flip-c3-xxxx`. You can connect to this network with password `GenericPassword`. It should automatically present you page to select your WiFi network, but if not, visit [http://192.168.4.1/](http://192.168.4.1/) in your browser.

Check your Home Assistant notifications or Integrations page to adopt your FLIP\_C3 as an ESPHome device.

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

## Bluetooth

If you have the Bluetooth integration active in Home Assistant, you may be able to adopt your FLIP\_C3 into Home Assistant immediately upon powering. This is a new feature that is being implemented.

## ESPHome

It may behoove you to adopt into [esphome.md](esphome.md "mention") and add your additional configuration before adopting into Home Assistant. Until you adopt into ESPHome, you will only have access to the following entities:

* 1x RGB LED
* 1x Red Status LED
* BOOT Button on GPIO9
* Reboot Button
* Hours Counter\* (some installs)
* FLIP\_C3 Internal Temperature

If you change the friendly name or hostname in ESPHome, you may need to delete and re-adopt the device into Home Assistant for these changes to be seen.&#x20;
