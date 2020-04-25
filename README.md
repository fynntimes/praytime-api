# PrayTime API

This is a very simple prayer times API that I spun up to support the SIJPA app. It uses the [PrayTimes.org](http://praytimes.org/wiki/Code_Manual) library and just
wraps a nice REST endpoint around it.

At this time, the API does not allow you to change calculation school; it defaults to "Jafari". If anyone happens across this project and wants a setting to change this,
make an issue and I'll happily add it.

### To get prayer times for a particular day.
```
GET https://api.faizaan.dev/times?lat={latitude}&lon={longitude}&m={month (1-12)}&y={4-digit year}&d={day}
```

### To get prayer times for a whole month.
(Omit the &d= parameter.)
```
GET https://api.faizaan.dev/times?lat={latitude}&lon={longitude}&m={month (1-12)}&y={4-digit year}
```

This repository is licensed under the MIT License. The praytime.js library is licensed under the LGPL license; see src/praytime.js for info.
