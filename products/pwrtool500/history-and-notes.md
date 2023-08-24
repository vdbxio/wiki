# History & Notes

## Notes

Testing two different 500A shunt sources and types - a larger 50mv and a smaller 75mv which I'm hoping is the better option

INA237 ESPHome Component by @bruxisma - [https://github.com/vdbxio/ina237](https://github.com/vdbxio/ina237)

## History

23.08.23 - Changes up to this point

* Switched to INA237 from MAX9612 due to misinterpretation of datasheet information
  * MAX9612 stated "inverting" which I thought to mean bi-directional readings, but it does not and makes both the MAX9612/9611 inappropriate for this use case.&#x20;
  * INA237 requires a software component to be written for ESPHome - as of now we have some of it done, but the data is very noisy and we aren't making use of on-board averaging and conversion time settings. Hoping this can be done within the next couple weeks.
* Changed to a larger, more user friendly spring connector
* MOSFET was reversed and is now correctly working in latest batch
* Latest batch only works with FLIP-C3 that was ordered with it
* Two batches were run with 23.06b despite major changes between the two - latter version has mode switch for INA237 hot/cold
* Only tested as hot-side shunt - working to setup test install as cold-side which should be default.

## Changelog

coming soon - version/batch numbers not yet established or messed up
