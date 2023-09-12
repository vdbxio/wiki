---
description: YAML Reference
---

# ESPHome

The following are snippets to properly interact with FLIP\_C3 hardware in ESPHome

## Boot Button

The `BOOT` button is available in software on `GPIO9` after boot. If held during boot, FLIP\_C3 will be put into bootloader/flash mode.

```yaml
binary_sensor:
  - platform: gpio
    name: Boot Button
    pin: 
      number: 9
      inverted: True
      mode:
        input: True
        pullup: True
```

