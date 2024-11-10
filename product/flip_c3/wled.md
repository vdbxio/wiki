# WLED

## Get started with WLED

WLED is designed for running addressable LEDs on ESP32 based devices and the FLIP\_C3 is a great board for running it.

**Use the installer at** [**install.wled.me**](https://install.wled.me/) **->**

### SETUP

**Under LED Settings:**

Set **GPIO8** noted as **L8** on the FLIP\_C3 to use the onboard WS2812 as a level shifter. Increase your LED count by 1 to include this pixel. If you are close enough to your first pixel, you may be able to get a stable output from any other pin. Using anything but WS281x pixels on L8 may cause unexpected results.

Set **GPIO9** as the button if you want to use the BOOT button on the face of the FLIP\_C3

**In the main interface**

Use segments to separate onboard WS2812 from the rest of your strip.

**Notes:**

If using 5v LEDs with the on-board buck converter make sure not to exceed the 2A/10w current rating which is about 100 LEDs at full brightness.

The FLIP\_C3 will get extremely hot over 1A. It should be able to maintain up to 2A in open air, but consider cooling when installing in an enclosure. Do not touch on-board components when in operation.
