namespace AdvancedModule {
    let ph_value_number = 0
    //% blockId="readPHNumber"
    //% block="Read PH value pin %ports| offset %offset"
    //% weight=70 group="Water"
    export function readPhNumber(ports: AnalogPin, offset: number): number {

        let temp = 0;
        temp = ports
        let sensorarray: number[] = []
        let avgValue: number = 0;
        for (let i = 0; i < 10; i++) {
            sensorarray.push(pins.analogReadPin(temp))
            basic.pause(10)
        }
        sensorarray.sort((n1, n2) => n1 - n2);
        for (let i = 2; i < 8; i++) {
            avgValue += sensorarray[i];
        }

        avgValue = avgValue / 6
        ph_value_number = ((avgValue * 5 / 1024 )*10.623 + offset -23.813)
        return ph_value_number 
    }
    let Voltage =0
    let pH_Value =0
    //% blockId="readVoltage"
    //% block="Read Voltage value pin %ports"
    //% weight=70 group="Water"
    export function ShowVoltage(ports: AnalogPin): number {

        pH_Value = pins.analogReadPin(ports);
        Voltage = pH_Value * (5.0 / 1023.0);
        return Voltage
    }
}