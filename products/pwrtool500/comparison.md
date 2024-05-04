---
description: Comparing comparable shunts - WIP
---

# Comparison

These are all the direct market competitors to the PwrTool 500.

|                        | PwrTool 500                                                                    | Victron SmartShunt 500                             | Thornwave PowerMon                                                              | REDARC Smart Battery Monitor            | LNEX AirShunt 500              |
| ---------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------- | ------------------------------------------------------------------------------- | --------------------------------------- | ------------------------------ |
| Current (Max/Const)    | 500A/300A                                                                      | 500A/300                                           | 500/?                                                                           | 500/?                                   | 500/?                          |
| Voltage                | 6-60v                                                                          | 6.5-70v                                            | up to 32v (v3.0) / 72v (v3.1)                                                   | 9-32v                                   | 8-100v                         |
| Polarity               | Hot/Cold                                                                       | Cold Only                                          | Hot Only                                                                        | Cold Only                               | Cold Only                      |
| Wireless               | Wifi + Bluetooth for provisioning                                              | Bluetooth                                          | Bluetooth                                                                       | Bluetooth                               | Bluetooth                      |
| User Interface         | Home Assistant, built-in web server                                            | Android/iOS App                                    | Android/iOS App                                                                 | Android/iOS App                         | Custom App                     |
| Expansion              | I2C, SPI, UART, LED, GPIO                                                      | VE.direct (custom UART, documented)                | Proprietary Bluetooth Touchscreen Only                                          | R-Bus / CAN (Undocumented)              | UART (Undocumented)            |
| Firmware               | ESPHome(Default) or custom code via Arduino/ESP-IDF                            | Proprietary                                        | Proprietary                                                                     | Proprietary                             | Proprietary                    |
| Temperature            | SHTC3 on front w/Humidity; Sense IC die temp facing shunt;   External Optional | External Optional                                  | External DS18B20 via proprietary connector                                      | External on included B+ cable?          | External Included              |
| External Voltage Sense | Optional via GPIO                                                              | Yes                                                | Yes                                                                             | No                                      | Yes                            |
| DC Power Conversion    | 5V/2A (10w) Buck + 3.3V/1A Linear regulator                                    | Internal only                                      | Internal only                                                                   | Internal only                           | Internal only                  |
| Load Control           | N-MOS up to 45w (TBD) with PWM control: Lighting, Relay, SSR, etc              | No                                                 | MOSFET for external relay or SSR                                                | with compatible external control system | No                             |
| LEDs                   | On-board WS2182b with level-shifted output on GPIO; On-board red status light  | Bluetooth; Error Status                            | None                                                                            | Bluetooth Staus                         | Bluetooth; Warning Status      |
| Buttons                | Boot (GPIO9) - Usable in Home Assistant; Reset; GPIO expandable                | None                                               | None                                                                            | Bluetooth Control                       | None                           |
| Documentation          | Open source updateable wiki managed by VDBX.io                                 | Manual, dimensional drawings, datasheet on website | Have to google for manual which is on external site, main website lacks clarity | Manual on website                       | No website or manual available |
| Price - USD            | $149                                                                           | $129                                               | $139                                                                            | $189                                    | $69                            |

## Software Screenshots



<div>

<figure><img src="../../.gitbook/assets/bsen500_app_grey_1 (1) copy.jpg" alt=""><figcaption><p>REDARC</p></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-04 at 2.49.29 PM (1).png" alt="" width="275"><figcaption></figcaption></figure>

 

<figure><img src="../../.gitbook/assets/Screenshot 2024-05-04 at 2.49.14 PM.png" alt="" width="315"><figcaption></figcaption></figure>

</div>
