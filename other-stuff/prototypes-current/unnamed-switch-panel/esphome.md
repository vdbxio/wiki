---
description: Base software
---

# ESPHome

## Specs

* ESP32-C3 supports ESP-IDF platform
* PCF8574 default address `0x20`
* Four switches are presented as eight `binary-sensors` for single click actions.
  * ESPHome functions can present multi-click and hold

## Features

* Two step process to base features in Home Assistant
  * Adopt in HA - joining Wifi should present a notification in HA - press the configure button and follow the steps
  * Download and setup blueprint \[link] to control your devices
* Base binary sensors should be set as internal to run a text sensor as a state machine for each switch. Can be rewritten for vertical orientations or use select box as an if variable.
  * Up, Down
  * 2x Up, 2x Down
  * Up Hold, Down Hold

## Code

<details>

<summary>Base </summary>

```
// Some code
```

</details>

