---
title: Glanceable Data
description: Home Assistant is excellent, but sometimes you want key data available at a glance. While we haven’t built our own dedicated display yet, we want to give you an easy DIY path using existing, affordable hardware.
sidebar:
  order: -20349
vdbx:
  type: post
  date: 2025-09-18
  author: Chloe Madison
  source: https://www.crowdsupply.com/voidbox-industries/pwrtool-500/updates/glanceable-data
  source_name: Crowd Supply
---
:::note
I’m giving a talk about [off-grid Home Assistant considerations on September 27th, 3:30 PM on the Make: Live Stage at Bay Area Maker Faire](https://bayarea.makerfaire.com/#/programming?day=2&lang=en&sessionId=155002000001973073)!
:::

Home Assistant is excellent, but sometimes you want key data available at a glance. While we haven’t built our own dedicated display yet, we want to give you an easy DIY path using existing, affordable hardware.

With the recent addition of LVGL to ESPHome and the wide range of [ESP32-based color touch screens available](https://www.amazon.com/s?k=esp32+touchscreen), you can now view PwrTool 500 data without opening Home Assistant. We’re working on a few concept layouts that will be available to flash directly onto popular displays from our website by the time we begin shipping.

![](/attachments/pwrtool-500-display-01.png)

*Example: a playful color-block styled layout*

Looking ahead, our goal is to build a flexible UI framework that works across many displays, with modular components and simple Home Assistant integration. You’ll be able to use ESPHome for deep customization if you want, but it won’t be required.

![](/attachments/pwrtool-500-display-02.png)

*Example: a high-contrast dark layout with colorful circular gauges*

The current implementation extends our modular ESPHome configurations using the LVGL component. We’ve streamlined font handling by importing Google fonts and icons through package variables, keeping only the sizes you need. LVGL, like CSS, has its quirks, and responsive design can be challenging, but it is possible.

Because PwrTool 500 is designed with off-grid systems in mind, our display layouts will prioritize energy data alongside useful extras such as:

- Time and date
- Location-based sensor info
- Switches and buttons
- Climate controls like thermostats

Direct integration with your Home Assistant data, without touching YAML, is also a priority. We expect this will be achievable with specialized entity types and potentially even a Home Assistant Blueprint.

This is a big undertaking, so we’d love your [feedback and involvement](https://github.com/vdbxio/esphome-configs) as we refine the library. Keep an eye out for updates and, if you want glanceable data at your fingertips, this is your opportunity to help shape what the [PwrTool 500](https://www.crowdsupply.com/voidbox-industries/pwrtool-500) ecosystem will look like.
