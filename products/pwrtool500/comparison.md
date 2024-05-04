---
description: Comparing comparable shunts - WIP
---

# Comparison

These are all the direct market competitors to the PwrTool 500.

|                        | PwrTool 500                                                                    | Victron SmartShunt 500                             | Thornwave PowerMon                              | REDARC Smart Battery Monitor            | LNEX AirShunt 500              |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------- | ----------------------------------------------- | --------------------------------------- | ------------------------------ |
| Current (Max/Const)    | 500A/300A                                                                      | 500A/300                                           | 500/?                                           | 500/?                                   | 500/?                          |
| Voltage                | 6-60v                                                                          | 6.5-70v                                            | up to 32v (v3.0) / 72v (v3.1)                   | 9-32v                                   | 8-100v                         |
| Polarity               | Hot/Cold                                                                       | Cold Only                                          | Hot Only                                        | Cold Only                               | Cold Only                      |
| Wireless               | Wifi + Bluetooth for provisioning                                              | Bluetooth                                          | Bluetooth                                       | Bluetooth                               | Bluetooth                      |
| User Interface         | Home Assistant, built-in web server                                            | Android/iOS App                                    | Android/iOS App                                 | Android/iOS App                         | Custom App                     |
| Expansion              | I2C, SPI, UART, LED, GPIO                                                      | VE.direct (custom UART)                            | Proprietary Bluetooth Touchscreen Only          | R-Bus / CAN (Undocumented)              | UART (Undocumented)            |
| Firmware               | ESPHome(Default) or custom code via Arduino/ESP-IDF                            | Proprietary                                        | Proprietary                                     | Proprietary                             | Proprietary                    |
| Temperature            | SHTC3 on front w/Humidity; Sense IC die temp facing shunt;   External Optional | External Optional                                  | External Optional                               | External on included B+ cable?          | External Included              |
| External Voltage Sense | Optional via GPIO                                                              | Yes                                                | Yes                                             | No                                      | Yes                            |
| Load Control           | N-MOS up to 45w (TBD) with PWM control: Lighting, Relay, SSR, etc              | No                                                 | MOSFET for external relay or SSR                | with compatible external control system | No                             |
| LEDs                   | On-board WS2182b with level-shifted output on GPIO; On-board red status light  | Bluetooth/Error Status                             | None                                            | Bluetooth Staus                         | Bluetooth / Warning Status     |
| Buttons                | Boot (GPIO9) - Usable in Home Assistant; Reset; GPIO expandable                | None                                               | None                                            | Bluetooth Control                       | None                           |
| Documentation          | Open source updateable wiki managed by VDBX.io                                 | Manual, dimensional drawings, datasheet on website | Hard to find manual, lacking clarity on website | Manual on website                       | No website or manual available |
| Price - USD            | $149                                                                           | $129                                               | $139                                            | $189                                    | $69                            |

