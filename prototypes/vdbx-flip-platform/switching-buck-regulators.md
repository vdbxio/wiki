---
description: AKA Project DOE
---

# Switching Buck Regulators

## Summary

Attempt to find a balance of price and size for a small 1-3A buck converter capable of up to 60V input. This came about when looking at postage stamp or smaller buck converters on AliExpress where input voltage is all over the place and not a headline feature apparently. I would like to have a standardized power supply that can work within most common battery systems without having to sort through 100s of pages of AliExpress to find the one you need.&#x20;

The best one I've found on AliExpress is based on the MP4560DN which handles up to 60v and provides 2A continuous. LCSC does not list it and it is and extended part for JLCPCB. It is also short of my requirements.

## Research

Before attempting the LDO experiment, I had done several hours of research on DC switching regulators within the 60v req and landed on creating 3 schematics based on the datasheet suggestions for the following ICs:

* LMR16020
  * as low as $0.55 at 100 qty
  * components are compact
  * seems to fit in LDO footprint of FLIP-C3&#x20;
* LMR36015
  * smallest footprint
  * <mark style="background-color:red;">$5 each until 200 units then $2 ea</mark>
  * no diode necessary
* TX4414
  * $0.24 @ 5u / $0.17 @ 150u
  * Large external components per datasheet
  * will need engineering to reduce size.

### History

Research started by looking at the cheapest chips on LCSC and making schematics from what the datasheet suggested. Tho I seem to have a very expensive IC in my list and I don't remember why.

I have also scoured TI's website while comparing it to LCSC's list, but I was moving on to the LDO experiment at this point. When I came back I already had 3 schematics and board layouts to pick from.

## Future

Even if we chose an IC suitable to launch the FLIP-C3 and the products it lives in, I intend to continue researching ICs to improve future revisions and maybe create a "Booster Pack" in case certain stackups of PCBs might need more power. A 3-5A converter with an output for addressable LEDs might be a great idea. We could also have a switch to swap between 5v and 12v

I'm hoping documentation improves as we test individual buck ICs.

&#x20;

## LMR16020 - Active Choice

{% embed url="https://www.ti.com/product/LMR16020?utm_source=google&utm_medium=cpc&utm_campaign=app-null-null-gpn_en-cpc-pf-google-wwe&utm_content=lmr16020&ds_k=LMR16020&dcm=yes&gclid=CjwKCAjw9J2iBhBPEiwAErwpeZ3i6t5_4YmACY3abskvhz1PHmjeeaS0uvIbnhEyo6aU_jU9awwdgBoC8YYQAvD_BwE&gclsrc=aw.ds" %}
Product Page on TI.com
{% endembed %}

* 4.3 V to 60 V Input Range
* 2A Continuous Output Current
  * LMR16030 - 3A
* Ultra-low 40 µA Operating Quiescent Current

### Datasheet

{% embed url="https://www.ti.com/lit/ds/symlink/lmr16020.pdf?ts=1682401856589" %}
