---
description: Get Started Quickly
---

# Home Assistant

## BLE Improv

If you have the Bluetooth integration active in Home Assistant, you may be able to configure your FLIP\_C3's Wifi credentials directly. Hit the blue button below to check your integrations page.

## WiFi

Your FLIP\_C3 will also create a Wifi access point as a backup.

```
network: flip-c3-xxxx
pass: GenericPassword
```

It should automatically present you page to set your WiFi credentials, but if not, visit [http://192.168.4.1/](http://192.168.4.1/) in your browser.

Check your Home Assistant notifications or Integrations page to adopt your FLIP\_C3 as an ESPHome device.

[![Open your Home Assistant instance and show your integrations.](https://my.home-assistant.io/badges/integrations.svg)](https://my.home-assistant.io/redirect/integrations/)

## ESPHome

It may behoove you to adopt into [esphome.md](esphome.md "mention") and add your additional configuration before adopting into Home Assistant. Until you adopt into ESPHome, you will only have access to the following entities:

* 1x RGB LED
* 1x Red Status LED
* BOOT Button on GPIO9
* Reboot Button
* Hours Counter\* (some installs)
* FLIP\_C3 Internal Temperature

If you change the friendly name or hostname in ESPHome, you may need to delete and re-adopt the device into Home Assistant for these changes to be seen.&#x20;
