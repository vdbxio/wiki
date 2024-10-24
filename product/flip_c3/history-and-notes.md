# History & Notes

## Notes

Versions below v1.0 have differences in pin layout especially the 2P header for the DC input so there are compatibility issues with those variants and any compatible PCBs, notably the PwrTool which was designed in paralell. It is best to match batch numbers if pairing these boards sourced from us.

## Changelog

* 24.07 - V1.1 -&#x20;
  * Add TVS diode to input - full 60v input transient suppresion
  * Move LED10 further from keepout zone - it has the room
  * Tweak inductor position lower
* 23.12.10 - Prep for early 2024 production
  * Moved C14 closer to EN pin - v1.0.1&#x20;
  * Research potential replacements for L1 based on price and availability
* 23.08.23 - Notable changes since last update&#x20;
  * Original DC spring connector only grabbed the tip of standard length ferrules making solid core wire the only real option
    * second option was too small & original is now discontinued - 0.9.5 is on the way with third option
  * Instead of presenting GPIO8 directly to the pin header which is used for the onboard WS2812b, we now route the D-OUT from the on-board WS2182b to an "L8" pin so it be used as a level shifter for short runs.&#x20;
* 23.04.30 - Switching Buck Regulator
  * LMR16020 - tested to work from 5 to 58v with only FLIP-C3 as load
    * higher voltages seeing upwards of 0.6v wobble on output
    * output is up to 0.7v higher at 58v input vs 5v input
  * Missed output ground on test board and poor placement of VREF
* 23.04.18 - LDO circuitry is not going to work, back to the drawing board.&#x20;
  * Design and order tester for switching buck
  * Remove LDO circuitry from FLIP-C3 and ~~reconsider footprint size~~.

## Version History

1.0.3 - Move C14 closer to EN - replace L1 due to availability & price

1.0.0 - First small production run

0.9.5 - Replace DC Spring Connector

0.9.4 - Reduce length, change DC spring connector, replace GPIO8 with LED-OUT 8

0.9.1 - First unit with LMR16020

0.9.0 - LDO Circuit was a bad idea, EN pin not pulled-up
