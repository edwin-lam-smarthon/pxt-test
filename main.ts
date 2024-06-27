led.enable(false)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, -1.9))
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P1, -1.9))
    basic.pause(2000)
})
