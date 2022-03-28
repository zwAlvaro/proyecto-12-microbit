radio.onReceivedNumber(function (receivedNumber) {
    music.playMelody("C5 B A G F G A G ", 251)
    basic.showIcon(IconNames.Happy)
    radio.setGroup(6)
    radio.sendNumber(6)
})
radio.setGroup(5)
basic.showIcon(IconNames.Sad)
let autor = "ÁDB p12"
basic.forever(function () {
	
})
