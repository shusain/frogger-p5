import { BufferedGraphics } from "./BufferedGraphics.js";
import { GameMap } from "./GameMap.js";

export class MapLocation {
    constructor(x, y, tileType, size) {
        this.tileType = tileType || 'water';
        this.size = size || 50;
        this.x = x;
        this.y = y;
    }
    commonRect() {
        rect(this.x, this.y, this.size, this.size)
    }
    water() {
        image(BufferedGraphics.bufferedGraphicsMap.water, this.x, this.y, GameMap.tileSize, GameMap.tileSize)
    }
    grass() {
        image(BufferedGraphics.bufferedGraphicsMap.grass, this.x, this.y, GameMap.tileSize, GameMap.tileSize)
    }
    road () {
        image(BufferedGraphics.bufferedGraphicsMap.road, this.x, this.y, GameMap.tileSize, GameMap.tileSize)
    }
    goalWin() {
        image(BufferedGraphics.bufferedGraphicsMap.goalWin, this.x, this.y, GameMap.tileSize, GameMap.tileSize)
    }
    goalFail() {
        image(BufferedGraphics.bufferedGraphicsMap.goalFail, this.x, this.y, GameMap.tileSize, GameMap.tileSize)
    }
    draw() {
        this[this.tileType]();
    }
}