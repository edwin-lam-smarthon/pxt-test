led.enable(false)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, 4.1))
    basic.pause(2000)
})
