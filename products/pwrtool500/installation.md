---
description: How to install the PwrTool 500
---

# Installation

{% hint style="info" %}
This is an extreme work in progress. Please be patient and feel free to ask any questions in our discord.
{% endhint %}

There are 3 quick steps to get going with the PwrTool 500

1. Wiring
2. Connect to Wi-Fi
3. Adopt in Home Assistant
4. Adopt into ESPHome `optional`

## Hot or Cold // High or Low // Positive or Negative

Most shunts of its type are "low-" or "cold-" side only, meaning the shunt itself is inserted in the ground path of your system. In some circumstances it may be difficult to intercept the ground path in a way that produces accurate results so we've built in an option to switch the PwrTool 500's polarity. The "hot-" or "high-" side mode will allow you to intersect the positive line to your load or battery. &#x20;

This should be selected before wiring and is factory set to Cold. Do not use a metal object to remove the jumper.&#x20;

\[DIAGRAM}

## Wiring Examples

The PwrTool 500 supports common wiring options for combined or discreet measurements from various sources and loads.&#x20;

###

### Delta Mode

In this configuration, current sensing will only be that which flows into and out of the battery. Reading will be the delta between load and charger currents. For example if charging at 10 amps with a 5 amp load, reading will be 5 amps. It will show positive or negative based on the orientation of the shunt.

You'll note that in this example that the load side is connected to battery positive. This ensures that charging produces a positive current where a load will show negative, but this can be inverted in Home Assistant.

<figure><img src="../../.gitbook/assets/drawio.svg" alt=""><figcaption></figcaption></figure>

