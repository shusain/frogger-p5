import { BufferedGraphics } from "./BufferedGraphics.js";
import { GameMap } from "./GameMap.js";

export class Log {
    static height = GameMap.tileSize*0.5;
    static width = GameMap.tileSize*1.5
    // Log row is effectively the parent but we need to add our X to it's X so all
    // logs in the row move together
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
        const isWithinXBounds = thisActualX < frogActualX && thisActualX+Log.width > frogActualX
        const isWithinYBounds = thisActualY < frogActualY && thisActualY+Log.height > frogActualY
        
        console.log(isWithinXBounds, isWithinYBounds);
        return isWithinXBounds && isWithinYBounds
    }
    draw() {
        image(BufferedGraphics.bufferedGraphicsMap.log, this.parentRow.x + this.x, this.y, Log.width, Log.height)
        // fill(255,0,0)
        // ellipse(this.parentRow.x+this.x, this.y, 10)
    }
}