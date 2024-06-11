led.enable(false)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Value: " + AdvancedModule.readPhNumber(AnalogPin.P0, 0))
    basic.pause(2000)
})
