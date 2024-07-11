led.enable(false)
OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Ph: " + AdvancedModule.readPhNumber(AnalogPin.P1, 0))
    basic.pause(2000)
})
