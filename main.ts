let Level = 0
let player2: Sprite = null
let player1: Sprite = null
function levelThree () {
    Level = game.askForNumber("What level would you like to play? 1 2 or 3?", 1)
    if (Level == 1) {
        levelOne()
    } else if (Level == 2) {
        levelTwo()
    } else if (Level == 3) {
        levelThree()
    } else if (Level == 999) {
        tiles.setCurrentTilemap(tilemap`level4`)
    }
    tiles.setCurrentTilemap(tilemap`level3`)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player2)
    controller.player2.moveSprite(player2)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.cameraFollowSprite(player1)
    controller.moveSprite(player1)
})
function levelOne () {
    tiles.setCurrentTilemap(tilemap`level1`)
    tiles.placeOnRandomTile(player1, sprites.dungeon.stairWest)
    tiles.placeOnRandomTile(player2, sprites.dungeon.stairEast)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(3, 5), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 5), false)
    tiles.setTileAt(tiles.getTileLocation(3, 6), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 6), false)
    tiles.setTileAt(tiles.getTileLocation(3, 7), sprites.dungeon.greenInnerSouthWest)
    tiles.setWallAt(tiles.getTileLocation(3, 7), false)
    tiles.setTileAt(tiles.getTileLocation(3, 5), sprites.dungeon.greenInnerSouthWest)
    tiles.setTileAt(location, sprites.dungeon.purpleSwitchDown)
})
function levelTwo () {
    tiles.setCurrentTilemap(tilemap`level2`)
}
