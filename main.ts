function jumping () {
    player1.ay = 300
    player2.ay = 300
}
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1.vy = -150
})
function keymapping () {
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.W,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK
    )
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.TWO,
    MakeyMakey.MakeyMakeyKey.UP,
    MakeyMakey.MakeyMakeyKey.DOWN,
    MakeyMakey.MakeyMakeyKey.LEFT,
    MakeyMakey.MakeyMakeyKey.RIGHT,
    MakeyMakey.MakeyMakeyKey.LEFT_CLICK,
    MakeyMakey.MakeyMakeyKey.RIGHT_CLICK
    )
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2.vy = -150
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . f f f . . . . . . . 
        . f 8 6 6 f . . . . . . 
        f 8 6 6 6 f . . . . . . 
        f f f f f f f f f f f . 
        f 8 6 6 6 6 6 f 6 6 6 f 
        f f f f f f f 6 f f f f 
        f 8 6 1 1 6 6 1 1 6 f . 
        f 8 6 1 f 6 6 1 f 6 f . 
        f 8 6 6 6 6 6 6 6 6 f . 
        f 8 6 6 f 6 6 6 6 6 f . 
        f 8 6 6 6 f f f 6 6 f . 
        f 8 8 6 6 6 6 6 6 6 f . 
        . f f f f f f f f f . . 
        . . f 6 6 6 6 6 f . . . 
        . f 6 6 6 6 6 6 6 f . . 
        f 6 f 6 6 6 6 6 f 6 f . 
        f f . f 6 6 6 f . f f . 
        . . . f 6 6 6 f . . . . 
        . . . f 6 6 6 f . . . . 
        . . . f 6 6 6 f . . . . 
        . . . f 6 f 6 f . . . . 
        . . . f 6 f 6 f . . . . 
        . . . . f . f . . . . . 
        `)
})
function createPlayers () {
    player1 = sprites.create(img`
        f f . . . f . . . f f 
        f e f . f 2 f . f 2 f 
        f e 2 f f 2 f f 2 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 1 1 2 2 1 1 2 f 
        f e 2 1 f 2 2 1 f 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 2 f 2 2 2 2 2 f 
        f e 2 2 2 f f f 2 2 f 
        f e e 2 2 2 2 2 2 2 f 
        . f f f f f f f f f . 
        . . f 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 f . 
        f 2 f 2 2 2 2 2 f 2 f 
        f f . f 2 2 2 f . f f 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . . f . f . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(player1, 100, 0)
    player1.setStayInScreen(true)
    player2 = sprites.create(img`
        . . . . . . . f f f . . 
        . . . . . . f 6 6 8 f . 
        . . . . . . f 6 6 6 8 f 
        . f f f f f f f f f f f 
        f 6 6 6 f 6 6 6 6 6 8 f 
        f f f f 6 f f f f f f f 
        . f 6 1 1 6 6 1 1 6 8 f 
        . f 6 f 1 6 6 f 1 6 8 f 
        . f 6 6 6 6 6 6 6 6 8 f 
        . f 6 6 6 6 6 f 6 6 8 f 
        . f 6 6 f f f 6 6 6 8 f 
        . f 6 6 6 6 6 6 6 8 8 f 
        . . f f f f f f f f f . 
        . . . f 6 6 6 6 6 f . . 
        . . f 6 6 6 6 6 6 6 f . 
        . f 6 f 6 6 6 6 6 f 6 f 
        . f f . f 6 6 6 f . f f 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 f 6 f . . . 
        . . . . f 6 f 6 f . . . 
        . . . . . f . f . . . . 
        `, SpriteKind.Player)
    controller.player2.moveSprite(player2, 100, 0)
    player2.setStayInScreen(true)
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
        . . . . . . . f f f . . 
        . . . . . . f 6 6 8 f . 
        . . . . . . f 6 6 6 8 f 
        . f f f f f f f f f f f 
        f 6 6 6 f 6 6 6 6 6 8 f 
        f f f f 6 f f f f f f f 
        . f 6 1 1 6 6 1 1 6 8 f 
        . f 6 f 1 6 6 f 1 6 8 f 
        . f 6 6 6 6 6 6 6 6 8 f 
        . f 6 6 6 6 6 f 6 6 8 f 
        . f 6 6 f f f 6 6 6 8 f 
        . f 6 6 6 6 6 6 6 8 8 f 
        . . f f f f f f f f f . 
        . . . f 6 6 6 6 6 f . . 
        . . f 6 6 6 6 6 6 6 f . 
        . f 6 f 6 6 6 6 6 f 6 f 
        . f f . f 6 6 6 f . f f 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 6 6 f . . . 
        . . . . f 6 f 6 f . . . 
        . . . . f 6 f 6 f . . . 
        . . . . . f . f . . . . 
        `)
})
controller.player1.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        f f . . . f . . . f f 
        f e f . f 2 f . f 2 f 
        f e 2 f f 2 f f 2 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 1 1 2 2 1 1 2 f 
        f e 2 1 f 2 2 1 f 2 f 
        f e 2 2 2 2 2 2 2 2 f 
        f e 2 2 f 2 2 2 2 2 f 
        f e 2 2 2 f f f 2 2 f 
        f e e 2 2 2 2 2 2 2 f 
        . f f f f f f f f f . 
        . . f 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 f . 
        f 2 f 2 2 2 2 2 f 2 f 
        f f . f 2 2 2 f . f f 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . . f . f . . . . 
        `)
})
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
        f f . . . f . . . f f 
        f 2 f . f 2 f . f e f 
        f 2 2 f f 2 f f 2 e f 
        f 2 2 2 2 2 2 2 2 e f 
        f 2 2 2 2 2 2 2 2 e f 
        f 2 1 1 2 2 1 1 2 e f 
        f 2 f 1 2 2 f 1 2 e f 
        f 2 2 2 2 2 2 2 2 e f 
        f 2 2 2 2 2 f 2 2 e f 
        f 2 2 f f f 2 2 2 e f 
        f 2 2 2 2 2 2 2 e e f 
        . f f f f f f f f f . 
        . . f 2 2 2 2 2 f . . 
        . f 2 2 2 2 2 2 2 f . 
        f 2 f 2 2 2 2 2 f 2 f 
        f f . f 2 2 2 f . f f 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 2 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . f 2 f 2 f . . . 
        . . . . f . f . . . . 
        `)
})
let player2: Sprite = null
let player1: Sprite = null
createPlayers()
keymapping()
jumping()
