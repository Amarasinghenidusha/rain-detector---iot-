esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BAUD_RATE115200)
esp8266.connect_wi_fi("SLT_FIBER_3Y9dS", "0000000")
if esp8266.is_wifi_connected():
    basic.show_icon(IconNames.HAPPY)
else:
    basic.show_icon(IconNames.SAD)

def on_forever():
    if pins.analog_read_pin(AnalogPin.P1) < 800:
        esp8266.send_telegram_message("0000vvvvvvvvvvv000000000dddddddddd000000000",
            "-564237782",
            "Rain Detected !!")
        if esp8266.is_telegram_message_sent():
            basic.show_icon(IconNames.DIAMOND)
            music.play_melody("C5 B C5 B C5 B C5 B ", 120)
            basic.pause(5000)
    else:
        basic.show_icon(IconNames.SMALL_DIAMOND)
basic.forever(on_forever)
