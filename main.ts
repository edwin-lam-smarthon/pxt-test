led.enable(false)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, -2.5))
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P1, -2.5))
    basic.pause(2000)
})
