namespace SpriteKind {
    export const FIRE = SpriteKind.create()
    export const Wader = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.FIRE, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(18, 10), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 10), false)
    tiles.setTileAt(tiles.getTileLocation(18, 11), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 11), false)
    tiles.setTileAt(tiles.getTileLocation(18, 12), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 12), false)
    tiles.setTileAt(tiles.getTileLocation(18, 13), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 13), false)
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
    tiles.setWallAt(tiles.getTileLocation(17, 13), false)
})
function levelThree () {
    tiles.setCurrentTilemap(tilemap`level7`)
}
function jumping () {
    player2.ay = 300
    player1.ay = 300
}
scene.onOverlapTile(SpriteKind.Wader, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(3, 5), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 5), false)
    tiles.setTileAt(tiles.getTileLocation(3, 6), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 6), false)
    tiles.setTileAt(tiles.getTileLocation(3, 7), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 7), false)
    tiles.setTileAt(location, sprites.dungeon.purpleSwitchDown)
    tiles.setWallAt(tiles.getTileLocation(14, 13), false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player2)
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player2.vy = -150
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player1)
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
function levelOne () {
    tiles.setCurrentTilemap(tilemap`level5`)
    createPlayers()
    jumping()
    tiles.placeOnRandomTile(player1, sprites.dungeon.stairEast)
    tiles.placeOnRandomTile(player2, sprites.dungeon.stairWest)
}
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1.vy = -150
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
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
    player2 = sprites.create(img`
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
        `, SpriteKind.FIRE)
    controller.moveSprite(player2, 100, 0)
    player1 = sprites.create(img`
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
        `, SpriteKind.Wader)
    controller.player2.moveSprite(player1, 100, 0)
}
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player1.setImage(img`
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
    player2.setImage(img`
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
function levelTwo () {
    tiles.setCurrentTilemap(tilemap`level6`)
}
controller.player1.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    player2.setImage(img`
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
let player1: Sprite = null
let player2: Sprite = null
keymapping()
let Level = game.askForNumber("What level would you like to play? 1 2 or 3?", 1)
if (Level == 1) {
    levelOne()
} else if (Level == 2) {
    levelTwo()
} else if (Level == 3) {
    levelThree()
} else if (Level == 999) {
    tiles.setCurrentTilemap(tilemap`level8`)
}
