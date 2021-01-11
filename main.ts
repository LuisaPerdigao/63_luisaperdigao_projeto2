let dado1 = 0
let dado2 = 0
input.onButtonPressed(Button.A, function () {
    dado1 += randint(1, 6)
    basic.pause(2000)
    basic.showNumber(dado1)
    basic.pause(2000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    dado1 = 0
    dado2 = 0
})
input.onButtonPressed(Button.B, function () {
    dado2 += randint(1, 6)
    basic.pause(2000)
    basic.showNumber(dado2)
    basic.pause(2000)
    basic.clearScreen()
})
