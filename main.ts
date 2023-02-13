namespace SpriteKind {
    export const FIRE = SpriteKind.create()
    export const WATER = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.WATER, assets.tile`tile3`, function (sprite, location) {
    if (!(Wall)) {
        tiles.setWallAt(tiles.getTileLocation(17, 33), true)
        tiles.setWallAt(tiles.getTileLocation(17, 34), true)
        tiles.setWallAt(tiles.getTileLocation(16, 33), true)
        tiles.setWallAt(tiles.getTileLocation(16, 34), true)
        tiles.setWallAt(tiles.getTileLocation(16, 35), true)
        tiles.setWallAt(tiles.getTileLocation(16, 36), true)
        tiles.setWallAt(tiles.getTileLocation(16, 37), true)
        tiles.setWallAt(tiles.getTileLocation(15, 36), true)
        tiles.setWallAt(tiles.getTileLocation(15, 37), true)
        tiles.setWallAt(tiles.getTileLocation(15, 38), true)
        tiles.setWallAt(tiles.getTileLocation(15, 39), true)
        tiles.setWallAt(tiles.getTileLocation(15, 40), true)
        Wall = true
        tiles.setTileAt(location, sprites.builtin.forestTiles10)
    }
})
scene.onOverlapTile(SpriteKind.FIRE, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(18, 10), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 10), false)
    tiles.setTileAt(tiles.getTileLocation(18, 11), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 11), false)
    tiles.setTileAt(tiles.getTileLocation(18, 12), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 12), false)
    tiles.setTileAt(tiles.getTileLocation(18, 13), sprites.dungeon.purpleInnerNorthWest)
    tiles.setWallAt(tiles.getTileLocation(18, 13), false)
    tiles.setWallAt(tiles.getTileLocation(14, 13), false)
    tiles.setTileAt(location, sprites.dungeon.greenSwitchDown)
})
function levelThree () {
    createPlayers()
    jumping()
    scene.cameraFollowSprite(player1)
    tiles.placeOnRandomTile(player1, sprites.builtin.forestTiles5)
    tiles.placeOnRandomTile(player2, sprites.dungeon.darkGroundNorthEast0)
}
function jumping () {
    player1.ay = 300
    player2.ay = 300
}
function game2 () {
    while (rounds == 3) {
        game.splash(GG(list))
    }
    tiles.setTileAt(tiles.getTileLocation(14, 10), sprites.dungeon.greenSwitchUp)
    tiles.setTileAt(tiles.getTileLocation(30, 5), sprites.dungeon.purpleSwitchUp)
    tiles.setTileAt(tiles.getTileLocation(13, 34), assets.tile`tile2`)
    tiles.setTileAt(tiles.getTileLocation(18, 41), assets.tile`tile5`)
    tiles.setTileAt(tiles.getTileLocation(13, 41), assets.tile`tile3`)
    tiles.setTileAt(tiles.getTileLocation(18, 34), assets.tile`tile4`)
    Level = game.askForNumber("What level would you like to play? 1 2 or 3?", 1)
    if (Level == 1) {
        levelOne()
    } else if (Level == 2) {
        levelTwo()
    } else if (Level == 3) {
        levelThree()
    } else if (Level == 999) {
        tiles.setCurrentTilemap(tilemap`level8`)
    } else {
        levelOne()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player2)
})
scene.onOverlapTile(SpriteKind.FIRE, assets.tile`tile2`, function (sprite, location) {
    if (Wall) {
        tiles.setWallAt(tiles.getTileLocation(14, 33), false)
        tiles.setWallAt(tiles.getTileLocation(14, 34), false)
        tiles.setWallAt(tiles.getTileLocation(15, 33), false)
        tiles.setWallAt(tiles.getTileLocation(15, 34), false)
        tiles.setWallAt(tiles.getTileLocation(15, 35), false)
        tiles.setWallAt(tiles.getTileLocation(15, 36), false)
        tiles.setWallAt(tiles.getTileLocation(15, 37), false)
        tiles.setWallAt(tiles.getTileLocation(16, 36), false)
        tiles.setWallAt(tiles.getTileLocation(16, 37), false)
        tiles.setWallAt(tiles.getTileLocation(16, 38), false)
        tiles.setWallAt(tiles.getTileLocation(16, 39), false)
        tiles.setWallAt(tiles.getTileLocation(16, 40), false)
        Wall = false
        tiles.setTileAt(location, sprites.builtin.forestTiles10)
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    player1.vy = -150
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player1)
})
scene.onOverlapTile(SpriteKind.FIRE, sprites.dungeon.stairSouth, function (sprite, location) {
    WinLose(true)
})
function keymapping () {
    MakeyMakey.setSimulatorKeymap(
    MakeyMakey.PlayerNumber.ONE,
    MakeyMakey.MakeyMakeyKey.W,
    MakeyMakey.MakeyMakeyKey.S,
    MakeyMakey.MakeyMakeyKey.A,
    MakeyMakey.MakeyMakeyKey.D,
    MakeyMakey.MakeyMakeyKey.F,
    MakeyMakey.MakeyMakeyKey.G
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
    createPlayers()
    jumping()
    scene.cameraFollowSprite(player1)
    tiles.placeOnRandomTile(player2, sprites.dungeon.stairEast)
    tiles.placeOnRandomTile(player1, sprites.dungeon.stairWest)
}
scene.onOverlapTile(SpriteKind.WATER, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(3, 5), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 5), false)
    tiles.setTileAt(tiles.getTileLocation(3, 6), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 6), false)
    tiles.setTileAt(tiles.getTileLocation(3, 7), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 7), false)
    tiles.setWallAt(tiles.getTileLocation(17, 13), false)
    tiles.setTileAt(location, sprites.dungeon.purpleSwitchDown)
})
scene.onOverlapTile(SpriteKind.FIRE, sprites.dungeon.hazardWater, function (sprite, location) {
    WinLose(false)
})
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
        `, SpriteKind.FIRE)
    controller.moveSprite(player1, 100, 0)
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
        `, SpriteKind.WATER)
    controller.player2.moveSprite(player2, 100, 0)
}
scene.onOverlapTile(SpriteKind.WATER, sprites.dungeon.stairNorth, function (sprite, location) {
    WinLose(true)
})
scene.onOverlapTile(SpriteKind.WATER, sprites.dungeon.hazardLava0, function (sprite, location) {
    WinLose(false)
})
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
function WinLose (WL: boolean) {
    list.push(WL)
    rounds += 1
    sprites.destroyAllSpritesOfKind(SpriteKind.FIRE)
    sprites.destroyAllSpritesOfKind(SpriteKind.WATER)
    game2()
}
scene.onOverlapTile(SpriteKind.FIRE, assets.tile`tile5`, function (sprite, location) {
    if (!(Wall)) {
        tiles.setWallAt(tiles.getTileLocation(14, 33), true)
        tiles.setWallAt(tiles.getTileLocation(14, 34), true)
        tiles.setWallAt(tiles.getTileLocation(15, 33), true)
        tiles.setWallAt(tiles.getTileLocation(15, 34), true)
        tiles.setWallAt(tiles.getTileLocation(15, 35), true)
        tiles.setWallAt(tiles.getTileLocation(15, 36), true)
        tiles.setWallAt(tiles.getTileLocation(15, 37), true)
        tiles.setWallAt(tiles.getTileLocation(16, 36), true)
        tiles.setWallAt(tiles.getTileLocation(16, 37), true)
        tiles.setWallAt(tiles.getTileLocation(16, 38), true)
        tiles.setWallAt(tiles.getTileLocation(16, 39), true)
        tiles.setWallAt(tiles.getTileLocation(16, 40), true)
        Wall = true
        tiles.setTileAt(location, sprites.dungeon.darkGroundNorthWest1)
    }
})
function GG (WsLs: any[]) {
    for (let value of WsLs) {
        if (value) {
            WLsnum += 1
        }
    }
    if (WLsnum == 3) {
        return "Wow you won all 3 times."
    } else if (WLsnum == 2) {
        return "Hey, 2 for 3 isn't bad!"
    } else if (WLsnum == 1) {
        return "You're mid."
    } else {
        return "Somehow you lost all 3 times. Go back to first grade you special kid."
    }
}
scene.onOverlapTile(SpriteKind.WATER, assets.tile`tile4`, function (sprite, location) {
    if (Wall) {
        tiles.setWallAt(tiles.getTileLocation(17, 33), false)
        tiles.setWallAt(tiles.getTileLocation(17, 34), false)
        tiles.setWallAt(tiles.getTileLocation(16, 33), false)
        tiles.setWallAt(tiles.getTileLocation(16, 34), false)
        tiles.setWallAt(tiles.getTileLocation(16, 35), false)
        tiles.setWallAt(tiles.getTileLocation(16, 36), false)
        tiles.setWallAt(tiles.getTileLocation(16, 37), false)
        tiles.setWallAt(tiles.getTileLocation(15, 36), false)
        tiles.setWallAt(tiles.getTileLocation(15, 37), false)
        tiles.setWallAt(tiles.getTileLocation(15, 38), false)
        tiles.setWallAt(tiles.getTileLocation(15, 39), false)
        tiles.setWallAt(tiles.getTileLocation(15, 40), false)
        Wall = false
        tiles.setTileAt(location, sprites.dungeon.darkGroundNorthWest1)
    }
})
function levelTwo () {
    createPlayers()
    jumping()
    scene.cameraFollowSprite(player1)
    tiles.placeOnRandomTile(player1, sprites.dungeon.greenInnerNorthWest)
    tiles.placeOnRandomTile(player2, sprites.dungeon.purpleInnerNorthEast)
}
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
let Level = 0
let player2: Sprite = null
let player1: Sprite = null
let list: boolean[] = []
let rounds = 0
let Wall = false
let WLsnum = 0
WLsnum = 0
Wall = true
let teammate = 0
rounds = 0
list = []
tiles.setCurrentTilemap(tilemap`level5`)
game2()
keymapping()
