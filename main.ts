basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) > 10) {
        basic.setLedColor(0xb09eff)
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 90)
        } else {
            if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
                calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 50)
                calliBot2.motorStop(C2Motor.links, C2Stop.Frei)
            } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel)) {
                calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 50)
                calliBot2.motorStop(C2Motor.rechts, C2Stop.Frei)
            }
        }
    } else {
        basic.turnRgbLedOff()
        calliBot2.motorStop(C2Motor.beide, C2Stop.Frei)
        basic.pause(500)
    }
})
basic.forever(function () {
    calliBot2.setRgbLed1(C2RgbLed.LV, 0x0000ff, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LV, 0x000000, 6)
    calliBot2.setRgbLed1(C2RgbLed.RV, 0xffff00, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RV, 0x000000, 6)
    calliBot2.setRgbLed1(C2RgbLed.LH, 0x00ff00, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LH, 0x000000, 6)
    calliBot2.setRgbLed1(C2RgbLed.RH, 0xa300ff, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RH, 0x000000, 6)
})
