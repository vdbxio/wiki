# M12 Drill/Driver Friction Fit Holder

![](<../.gitbook/assets/Screenshot 2023-04-26 at 12.05.03 AM.png>)

## Summary

A parametric design intended to keep the non-Fuel drill/driver combo held in place during travel in an RV. It should be a one-handed remove and work under-desk or on wall.

## Parametric

The Fusion 360 file was built with a single [User Parameter](#user-content-fn-1)[^1]:`innerDia` which is the inner diameter of the main cylindrical shape. The rest of the design should generate from there for most reasonable and possibly unreasonable values of `innerDia`.&#x20;

The following are parameters used for the tools I own:

* 2462-20 Driver - `55mm`
  * Printed nicely with PETG - tight friction fit&#x20;
* 2407-20 Drill - `60mm`
  * Printing

## Mesh Files for Slicing

{% file src="../.gitbook/assets/m12-friction-fit-driver-2462.3mf" %}
3MF File for 2462-20 M12 Driver
{% endfile %}

{% file src="../.gitbook/assets/m12-friction-fit-driver-2462.stl" %}
STL File for 2462-20 M12 Driver
{% endfile %}

[^1]: User Parameters in Fusion 360 are variables that are able to be set by the user to change parameters of the design.&#x20;



    You can edit them by being in the Design workspace and opening the Modify menu. At the bottom of that menu is the option "Change Parameters" and clicking it will present a new dialog with a grid of any available user parameters.&#x20;
