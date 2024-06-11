namespace AdvancedModule {
let ph_value_number = 0
//% blockId="readPHNumber"
//% block="Read PH value (x100) pin %ports| offset %offset"
//% weight=70 group="Water"
export function readPhNumber(ports: AnalogPin, offset: number): number {

    let temp = 0;
    temp = ports
    let sensorarray: number[] = []
    for (let i = 0; i < 10; i++) {
        sensorarray.push(pins.analogReadPin(temp))
        basic.pause(10)
    }
    sensorarray.sort((n1, n2) => n1 - n2);
    for (let value of sensorarray) {
        serial.writeLine(value.toString())
    }
    ph_value_number = (sensorarray[5] * 5 * 10 * 35 / 1024) + offset
    return ph_value_number
}
}