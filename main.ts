basic.forever(function () {
    if (input.logoIsPressed()) {
        basic.showIcon(IconNames.Happy)
        basic.showString("My name is Abdullah")
        basic.showString("I am 10 years old")
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
