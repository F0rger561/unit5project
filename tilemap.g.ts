// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20001000010202020202020202020202020202031316161616161616161616161616161208100909090909090909090909090c04170b1b1b1b1b1b1b1b1b1b1b1b1b111508090909090909090909090909090c04170b1b1b1b1b1b1b1b1b1b1b1b1b1b15080a0a0a0b0b0b0b0a0a0a0909090c04170b1b1b1b1a1a1a0d0d0d0d1a1a1a15080a0a0a0a0a0a0a0a0a0a0909090c04170b1b1b1b1a1a1a1a1a1a1a1a1a1a150809090e090909090909090909090c04170b1b1b1b1b1b1b1b1b1b1b1b1b1e150809090e090909090909090909090c04170b1b1b1b1b1b1b1b1b1b1b1b1b1b150809090e090909090909090909090c04170b1b1b1b1b1b1b1b1b1b1b1b1b1b150809090a0a0d0d0a0a0b0b0a0a0a0a04171a1a1a1a0d0d1a1a0b0b1a1a1b1b1508090b0a0a0a0a0a0a0a0a0a0a0a0a04171a1a1a1a1a1a1a1a1a1a1a1a0c1b1508090b09090909090909090909091d04171b0e1b1b1b1b1b1b1b1b1b1b0c1b1508090b09090909090909090909090904171b0e1b1b1b1b1b1b1b1b1b1b0c1b1508090b0909090a0b0b0b0b0a09090904171b0e1b1a0d0d0d0d1a1b1b1b0c1b1508090909090a0a0a0a0a0a0a0a090904171b0e1a1a1a1a1a1a1a1a1b1b1b1b15080909090a0a0a0a0a0a0a0a0a0a0f04171c1a1a1a1a1a1a1a1a1a1a1b1b1b150607070707070707070707070707070514181818181818181818181818181819`, img`
22222222222222222222222222222222
2..............22..............2
2..............22..............2
2222....222....22....222....2222
22222222222....22....22222222222
2..2...........22..............2
2..2...........22..............2
2..2...........22..............2
2..22..22..2222222222..22..22..2
2..22222222222222222222222222..2
2..............22.2............2
2..............22.2............2
2.....2....2...22.2.2....2.....2
2....22222222.2222222222222....2
2...2222222222.22.2222222222...2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenInnerSouthWest,sprites.skillmap.islandTile4,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava1,sprites.dungeon.hazardLava0,sprites.builtin.brick,sprites.dungeon.stairSouth,sprites.dungeon.stairWest,sprites.dungeon.stairEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorLight2,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.stairNorth,sprites.dungeon.greenSwitchUp,sprites.dungeon.purpleSwitchUp], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`200010000507070707070707070707070707070a0d1010101010101010101010101010140102030303030303030303030404040b0e11111111111a1111111a11111113150103030303030303030303030304040b0e1111111111111111111111111111150118181818181818181804030303040b0e1111191a1111111a111111111919150118040404040303030404040303030b0e1111191919191919191919191919150118040404030303030304040403030b0e1111111a1a1a111111111a1a1a1a150118040403030318030303040404030b0e111111111a1a11111111111a1a1a150118040303031818180303030403030b0e1a111111111111111a1111111111150118030303181818181803030303030b0e1a1a11111111111a1a1a11111111150118030318181818181818030303030b0e1a1a1a1919191919191919191911150118031818181818181818181818180b0e1a1a1a1a19191919191919191911150118030403030303030403030303030b0e1a1a1a1111111a1111111a111911150118030403030303030403030303030b0e1a1a111111111a1111111a111111150118030303030403030303030403030b0e1111111119111111191111111111150118030303030403030303030403090b0e1711111119111111191111111911150608080808080808080808080808080c0f121212121212121212121212121216`, img`
22222222222222222222222222222222
...............22..............2
...............22..............2
.222222222.....22..2.........222
.2.............22..2222222222222
.2.............22..............2
.2.....2.......22..............2
.2....222......22..............2
.2...22222.....22..............2
.2..2222222....22...2222222222.2
.2.22222222222222....222222222.2
.2.............22............2.2
.2.............22..............2
...............22....2...2.....2
...............22....2...2...2.2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest0,sprites.dungeon.stairWest,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.hazardWater,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairSouth,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleInnerNorthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.stairEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.stairNorth,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark0,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`20001000010202020202020202020202020202030a101010101010101010101010101009061717171717171717171717171715040e15161616161616161616161616160f061717171717171717171717171815040e151b1616161616161616161616160f061111111111111111111111111115040e15111111111111111111111111110f061111111111111111111111111111040e11111111111111111111111111110f061212121212121217171712121111040e11111313161616131313131313130f061212121212121717171717121217040e16131316161616161313131313130f061212121212171717121717171717040e16161616161316161613131313130f061212121217171712121217171717040e16161616131313161616131313130f061212121717171217171712171a11040e11191613161616131616161313130f061212121717121217171717121111040e11111316161616131316161313130f061212121717171211111717141111040e11111316161111131616161313130f061212121217171712121717141212040e13131316161313161616131313130f061212121212171717171717121212040e13131316161616161613131313130f061212121212121717171712121212040e13131313161616161313131313130f070808080808080808080808080808050b0d0d0d0d0d0d0d0d0d0d0d0d0d0d0c`, img`
22222222222222222222222222222222
2.............2222.............2
2.............2222.............2
22222222222222222222222222222222
22222222222222222222222222222222
2............222222............2
2..............22..............2
2..............22..............2
2..............22..............2
2.............2222.............2
2............222222............2
2.......22...222222...22.......2
2..............22..............2
2..............22..............2
2..............22..............2
22222222222222222222222222222222
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth0,sprites.builtin.oceanDepths0,sprites.dungeon.hazardLava1,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava0,sprites.builtin.brick,sprites.dungeon.darkGroundNorthWest1,sprites.builtin.forestTiles10,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000000010100000000000000000000000000000000000000000000000000000000000000000000000000000000000202020202020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.purpleSwitchDown,sprites.dungeon.greenSwitchDown], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
