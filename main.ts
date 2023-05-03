radio.onReceivedString(function (receivedString) {
    power = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    if (power <= -111) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else if (power <= -94) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (power <= -77) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (power <= -60) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (power <= -44) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
let power = 0
radio.setGroup(1)
basic.forever(function () {
    radio.sendString("I LOVE wolips.ru")
})
