sonar = 0
cuteBot.forward()

def on_forever():
    global sonar
    if cuteBot.tracking(cuteBot.TrackingState.L_UNLINE_R_LINE):
        cuteBot.motors(30, 0)
    elif cuteBot.tracking(cuteBot.TrackingState.L_LINE_R_UNLINE):
        cuteBot.motors(0, 30)
    elif cuteBot.tracking(cuteBot.TrackingState.L_R_LINE):
        cuteBot.motors(30, 30)
    sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.INCHES)
basic.forever(on_forever)
