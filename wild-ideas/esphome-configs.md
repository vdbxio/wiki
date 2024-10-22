---
description: >-
  These are various configs I've used, but are in no way complete or bug free.
  Use at your own risk.
---

# ESPHome Configs



## GPS

```yaml
# Declare GPS module
gps:
  update_interval: 1s
  latitude:
    name: "Latitude"
  longitude:
    name: "Longitude"
  altitude:
    name: "Altitude"
  speed:
    name: "Speed"
  course:
    name: "Course"
  satellites:
    name: "Satellites"

# GPS as time source
time:
  - platform: gps
    id: gps_time
  
sensor:
  - platform: hmc5883l
    field_strength_x:
      name: "HMC5883L Field Strength X"
    field_strength_y:
      name: "HMC5883L Field Strength Y"
    field_strength_z:
      name: "HMC5883L Field Strength Z"
    heading:
      name: "HMC5883L Heading"
    oversampling: 1x
    range: 130uT
    update_interval: 60s
```

## Relay Set

```yaml
switch:
  - platform: gpio
    name: "TV"
    restore_mode: ALWAYS_OFF
    pin:
      pcf8574: pcf8574_hub
      number: 0
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 1"
    pin:
      pcf8574: pcf8574_hub
      number: 1
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 2"
    pin:
      pcf8574: pcf8574_hub
      number: 2
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 3"
    pin:
      pcf8574: pcf8574_hub
      number: 3
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 4"
    pin:
      pcf8574: pcf8574_hub
      number: 4
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 5"
    pin:
      pcf8574: pcf8574_hub
      number: 5
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 6"
    pin:
      pcf8574: pcf8574_hub
      number: 6
      mode: OUTPUT
      inverted: true
  - platform: gpio
    name: "Relay 7"
    restore_mode: ALWAYS_OFF
    pin:
      pcf8574: pcf8574_hub
      number: 7
      mode: OUTPUT
      inverted: false
```

## Grow Fingerprint

````yaml
```esphome
text_sensor:
  - platform: template
    name: "Fingerprint State"
    id: fingerprint_state
    update_interval: never

uart:
  rx_pin: 20
  tx_pin: 21
  baud_rate: 57600

sensor:
  - platform: fingerprint_grow
    fingerprint_count:
      name: "Fingerprint Count"
    last_finger_id:
      name: "Fingerprint Last Finger ID"
    last_confidence:
      name: "Fingerprint Last Confidence"
    status:
      name: "Fingerprint Status"
    capacity:
      name: "Fingerprint Capacity"
    security_level:
      name: "Fingerprint Security Level"


fingerprint_grow:
  sensing_pin: 1
  
  on_finger_scan_matched:
    - fingerprint_grow.aura_led_control:
        state: BREATHING
        speed: 200
        color: BLUE
        count: 1
    - text_sensor.template.publish:
        id: fingerprint_state
        state: !lambda 'return "Authorized finger " + to_string(finger_id) + ", confidence " + to_string(confidence);'
    - homeassistant.event:
        event: esphome.test_node_finger_scan_matched
        data:
          finger_id: !lambda 'return finger_id;'
          confidence: !lambda 'return confidence;'
  on_finger_scan_unmatched:
    - fingerprint_grow.aura_led_control:
        state: FLASHING
        speed: 25
        color: RED
        count: 2
    - text_sensor.template.publish:
        id: fingerprint_state
        state: "Unauthorized finger"
    - homeassistant.event:
        event: esphome.test_node_finger_scan_unmatched
  on_enrollment_scan:
    - fingerprint_grow.aura_led_control:
        state: FLASHING
        speed: 25
        color: BLUE
        count: 2
    - fingerprint_grow.aura_led_control:
        state: ALWAYS_ON
        speed: 0
        color: PURPLE
        count: 0
    - homeassistant.event:
        event: esphome.test_node_enrollment_scan
        data:
          finger_id: !lambda 'return finger_id;'
          scan_num: !lambda 'return scan_num;'
  on_enrollment_done:
    - fingerprint_grow.aura_led_control:
        state: BREATHING
        speed: 100
        color: BLUE
        count: 2
    - homeassistant.event:
        event: esphome.test_node_enrollment_done
        data:
          finger_id: !lambda 'return finger_id;'
  on_enrollment_failed:
    - fingerprint_grow.aura_led_control:
        state: FLASHING
        speed: 25
        color: RED
        count: 4
    - homeassistant.event:
        event: esphome.test_node_enrollment_failed
        data:
          finger_id: !lambda 'return finger_id;'


```
````
