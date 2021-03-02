import { BufferedGraphics } from "./BufferedGraphics.js";
import { GameMap } from "./GameMap.js";

export class Car {
    static height = GameMap.tileSize*0.5;
    static width = GameMap.tileSize*0.9
    
    constructor(x, y, parentRow) {
        this.x = x || 0;
        this.y = y || 0;
        this.parentRow = parentRow;
    }
    isIntersectingItem(frog) {
        const thisActualX = this.parentRow.x+this.x;
        const thisActualY = this.y;
        const frogActualX = frog.x;
        const frogActualY = frog.y;
        const isWithinXBounds = thisActualX < frogActualX && thisActualX+Car.width > frogActualX
        const isWithinYBounds = thisActualY < frogActualY && thisActualY+Car.height > frogActualY
        
        console.log(isWithinXBounds, isWithinYBounds);
        return isWithinXBounds && isWithinYBounds
    }
    draw() {
        image(BufferedGraphics.bufferedGraphicsMap.car, this.parentRow.x + this.x, this.y, Car.width, Car.height)
    }
}