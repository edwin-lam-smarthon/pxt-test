let offset = 0
let ph = 0
led.enable(false)
OLED.init(128, 64)
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("smarthon", "12345678")
basic.forever(function () {
    if (WiFiIoT.is_wifi_connect()) {
        OLED.clear()
        OLED.writeStringNewLine("PH: " + AdvancedModule.readPhNumber(AnalogPin.P0, 4.4))
        ph = AdvancedModule.readPhNumber(AnalogPin.P0, 0)
        offset = 4.4
        WiFiIoT.sendThingspeak(
        "EKD278W78BT094U0",
        ph + offset
        )
        basic.pause(2000)
    }
})
