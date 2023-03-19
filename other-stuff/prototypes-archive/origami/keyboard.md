# Keyboard

### Updates

* Jan 16, 2017
  * Focus has switched from a membrane based keyboard to a micro-sized mechanical keyboard. Both options will continue to be developed and hopefully the possibility of them merging into a single board design is possible. The mechanical keyboard design will likely also spin off into its own project, with updates making their way back into nbPi.
  * Add open-source keyboard project references

### Mechanical Keyboard

A mini mechanical keyboard with 3D printed key-caps

### Membrane Keyboard

A matrix keyboard with contact pad alignment for use with a keyboard membrane, specifically the one from the T-Mobile G1/HTC Dream

### References

These links below are references and resources used to create the keyboard section of the nbPi.

#### RC2014 - 40 Key

[http://rc2014.co.uk/modules/universal-micro-keyboard/](http://rc2014.co.uk/modules/universal-micro-keyboard/) This is a good base keyboard based on a Pro-Mini(32u4) or bare DIP ATMEGA328

**Matrix Keyboard BOM**

* 1 off RC2014 KEYBOARD PCB
* 1 off 8 pin RA header
* 1 off 5 pin RA header
* 40 off Tactile Switch
* 8 off 1N4148

`[ATMEGA328 Version available]`

**USB Keyboard BOM**

* 1 off RC2014 KEYBOARD PCB
* 1 off 24 pin wide socket to Pro Mini adapter
* 1 off Arduino Pro Mini
* 1 off 10k Resistor
* 1 off 100nf capacitor
* 41 off Tactile Switch
* 8 off 1N4148

#### w4ilun's Pocket Keyboard 14x5 + 5 (70+5)

This is a really good 14x5 matrix with a 4-way directional stick with center click. It's based on a 32u4 and takes cues from the D60 project below.

**BOM**

Components

* Component/Label/Quantity
* Atmega32u4/\~/1
* Micro USB Connector/\~/1
* 22OΩ/R1, R2/2
* 10KΩ/R3/1
* 330Ω/R4/1
* 22pF/C1, C2/2
* 1uF/C3/1
* LED/D0/1
* 1N4148/D1-D70/70
* TL3303 Tactile Switch/SW/70
* 5-way Switch/S1/1

#### GH60 Project by komar007

[http://blog.komar.be/projects/gh60-programmable-keyboard/](http://blog.komar.be/projects/gh60-programmable-keyboard/)
