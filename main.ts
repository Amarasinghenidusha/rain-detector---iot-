input.onButtonPressed(Button.A, function () {
    if (ESP8266ThingSpeak.isLastUploadSuccessful()) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
ESP8266ThingSpeak.connectWifi(
SerialPin.P15,
SerialPin.P16,
BaudRate.BaudRate115200,
"AI-THINKER_D8D017",
"your_pw"
)
if (ESP8266ThingSpeak.isThingSpeakConnected()) {
    basic.showIcon(IconNames.Happy)
} else {
    basic.showIcon(IconNames.Sad)
}
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) < 800) {
        esp8266.sendTelegramMessage("5109606479:AAGCKgG4NXD2XYW_9H_2fmn8JzBpXyvrY7o", "-564237782", "Rain Detected !!")
        if (esp8266.isTelegramMessageSent()) {
            basic.showIcon(IconNames.Diamond)
            music.playMelody("C5 B C5 B C5 B C5 B ", 120)
            basic.pause(5000)
        }
    } else {
        basic.showIcon(IconNames.SmallDiamond)
    }
})
