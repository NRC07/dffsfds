input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(500)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 43)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 43)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 43)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 43)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 43)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 43)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 43)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 43)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 14)
    basic.pause(100)
    maqueen.motorStop(maqueen.Motors.M1)
})
