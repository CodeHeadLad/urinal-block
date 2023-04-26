input.onButtonPressed(Button.A, function () {
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    music.setVolume(255)
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Robotics_Board.allOff()
    music.setVolume(0)
})
let Top_Reservoir_MP = 0
let Bottom_Reservoir_MP = 0
pins.digitalWritePin(DigitalPin.P15, 0)
pins.digitalWritePin(DigitalPin.P14, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P9, 0)
basic.forever(function () {
    Bottom_Reservoir_MP = pins.analogReadPin(AnalogPin.P0)
    Top_Reservoir_MP = pins.analogReadPin(AnalogPin.P1)
    if (Bottom_Reservoir_MP > 850) {
        basic.showString("B")
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P9, 1)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    } else {
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P9, 0)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        basic.showString("")
    }
    if (Top_Reservoir_MP > 800) {
        basic.showString("T")
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        pins.digitalWritePin(DigitalPin.P14, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P14, 0)
        basic.showString("")
    }
    basic.pause(200)
})
