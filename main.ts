let Bottom_Reservoir_MP = 0
let Top_Reservoir_MP = 0
input.onButtonPressed(Button.A, function () {
    music.setVolume(127)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(0)
})
basic.forever(function () {
    Bottom_Reservoir_MP = pins.analogReadPin(AnalogPin.P0)
    Top_Reservoir_MP = pins.analogReadPin(AnalogPin.P1)
    if (Bottom_Reservoir_MP > 850) {
        basic.showIcon(IconNames.Heart)
        music.playTone(392, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(349, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(247, music.beat(BeatFraction.Half))
        music.playTone(262, music.beat(BeatFraction.Half))
        pins.digitalWritePin(DigitalPin.P2, 1)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 100)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    if (Top_Reservoir_MP > 850) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
        music.playTone(262, music.beat(BeatFraction.Whole))
        pins.digitalWritePin(DigitalPin.P3, 1)
        basic.showIcon(IconNames.No)
        basic.pause(5000)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
    }
    basic.pause(200)
})
