# Overview

A 500 amp hot-side smart shunt for DC systems up to 60v. It features an ESP32-C3 running ESPHome for seamless integration with Home Assistant out of the box. Extend it further with ESPHome, Tasmota or your own custom Arduino or ESP-IDF firmware.

## Features

- ESP32-C3-H4
	- BLE 5.0 & Wifi b/g/n
	- Extended temperature tange:  -40 to 105 °C
	- USB-C connector for native firmware updating
- 7-60VDC hot-side voltage, current, and power (MAX9612)
	- Temp sensor on package placed near shunt
	- i2c address: 
- AHT20 Temperature & Humidity Sensor
	- Thermally isolated as much as possible
	- i2c address: 
- GPIO Components
	- Blue "Status" LED - GPIO 10
	- SK6812 NeoPixel - GPIO 8
	- User/Boot Switch - GPIO 9
  - Reset Switch - EN Pin
- 8 GPIO/3V3/GND available on a 2.54mm header​
	- UART Header
	- i2C header 
		- SCL - GPIO 1
		- SDA - GPIO 0
