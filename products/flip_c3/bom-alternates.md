---
description: Major parts and alternatives for the FLIP_C3
---

# BOM Alternates

The retail version of the FLIP\_C3 is currently manufactured by JLCPCB using their parts library. While it is said that JLCPCB uses their sister company LCSC for parts, the two companies usually have different stock. This is a living document of potential alternates for major parts including those used in production or considered for production. This document can be used in case of stock declines or discontinuation of parts. Basic passives like resistors and capacitors may not be included as this is intended for major functional parts and those parts can be easily replaced with a simple search when using the BOM directly from the EasyEDA files.

## I2C & UART Connectors

For Qwiic and Stemma QT compatibility we use JST-SH1.0 connectors based on `SM04B-SRSS-TB(LF)(SN)` via reference document from [Sparkfun](https://www.sparkfun.com/qwiic#faqs)&#x20;

A second connector is used to connect to the RX/TX lines on GPIO 20/21 alongside GND & 3v3 in the same order as the I2C connections on GPIO 1/0 - See [PINOUT](./#pinout)

<table><thead><tr><th width="130">LCSC</th><th width="118">JLCPCB</th><th width="111">Production</th><th width="91" data-type="number">Price</th><th width="255">Notes</th><th data-type="files">Datasheet</th></tr></thead><tbody><tr><td><a href="https://www.lcsc.com/product-detail/Wire-To-Board-Wire-To-Wire-Connector_BOOMELE-Boom-Precision-Elec-C145956_C145956.html">C145956</a></td><td><a href="https://jlcpcb.com/partdetail/boomele_boom_Precision_elec-C145956/C145956">C145956</a></td><td>up to 1.0.0</td><td>0.0591</td><td>Discontinued on JLCPCB</td><td><a href="../../.gitbook/assets/C145956.pdf">C145956.pdf</a></td></tr><tr><td>C3029343</td><td><a href="https://jlcpcb.com/partdetail/Xunpu-WAFER_SH1_04PWB/C3029343">C3029343</a></td><td></td><td>0.0498</td><td>thicker walls, better footprint?</td><td><a href="../../.gitbook/assets/WAFER-SH1.0-4PWB.pdf">WAFER-SH1.0-4PWB.pdf</a></td></tr><tr><td>C7430446</td><td><a href="https://jlcpcb.com/partdetail/Megastar-ZX_SH1_04PWT/C7430446">C7430446</a></td><td></td><td>0.0393</td><td>thicker walls, better footprint?</td><td><a href="../../.gitbook/assets/ZX-SH1.0-4PWT (1).pdf">ZX-SH1.0-4PWT (1).pdf</a></td></tr><tr><td><a href="https://www.lcsc.com/product-detail/Wire-To-Board-Wire-To-Wire-Connector_JST-SM04B-SRSS-TB-LF-SN_C160404.html">C160404</a></td><td><a href="https://jlcpcb.com/partdetail/Jst-SM04B_SRSS_TB_LF_SN/C160404">C160404</a></td><td></td><td>0.123</td><td>JST original spec</td><td><a href="../../.gitbook/assets/SM04B-SRSS-TB(LF)(SN).pdf">SM04B-SRSS-TB(LF)(SN).pdf</a></td></tr></tbody></table>

## ESP32-C3

There are two variants of the ESP32-C3-MINI-1 module. The [H4 variant](https://jlcpcb.com/partdetail/EspressifSystems-ESP32\_C3\_MINI\_1H4/C2934569) has a higher temp tolerance than the [base model N4](https://jlcpcb.com/partdetail/EspressifSystems-ESP32\_C3\_MINI\_1N4/C2838502). We've focused on using the H4 variant, but supply chain issues could lead to us using the N4 model in some production runs. Our early 2024 production run may require this change.
