let sonar = 0
basic.showArrow(ArrowNames.South)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff8000)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Inches)
    if (sonar > 2 && sonar < 6) {
        cuteBot.motors(0, 0)
        for (let index = 0; index < 4; index++) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
            music.play(music.tonePlayable(880, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        }
        basic.pause(2000)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(0, 30)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_R_line)) {
        cuteBot.motors(30, 30)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(30, 0)
    }
})
