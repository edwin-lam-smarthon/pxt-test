let ph = 0
let voltage = 0
led.enable(false)
OLED.init(128, 64)
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("smarthon", "12345678")
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Vol:" + AdvancedModule.ShowVoltage(AnalogPin.P0))
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, 0))
    voltage = AdvancedModule.ShowVoltage(AnalogPin.P0)
    ph = AdvancedModule.readPhNumber(AnalogPin.P0, 0)
    WiFiIoT.sendThingspeak(
    "OI8QA12G71P6QV35",
    voltage,
    ph
    )
    basic.pause(2000)
})
