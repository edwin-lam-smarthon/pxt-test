WiFiIoT.on_thingspeak_conn(function (Status, Error_code) {
    OLED.clear()
    OLED.writeStringNewLine("Status: " + Status)
    OLED.writeStringNewLine("Error:" + Error_code)
})
let ph = 0
led.enable(false)
OLED.init(128, 64)
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("smarthon", "12345678")
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, 4.3))
    ph = AdvancedModule.readPhNumber(AnalogPin.P0, 0)
    WiFiIoT.sendThingspeak(
    "EKD278W78BT094U0",
    ph
    )
    basic.pause(2000)
})
