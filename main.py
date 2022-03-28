def on_received_number(receivedNumber):
    music.play_melody("C5 B A G F G A G ", 120)
    basic.show_icon(IconNames.HAPPY)
    radio.set_group(6)
    radio.send_number(6)
radio.on_received_number(on_received_number)

radio.set_group(5)
basic.show_icon(IconNames.SAD)

def on_forever():
    pass
basic.forever(on_forever)
