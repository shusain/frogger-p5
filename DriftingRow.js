import { GameMap } from "./GameMap.js";

export class DriftingRow {
    constructor(x, y, itemType, spaceBetweenItems, itemSpeed) {
        this.x = x
        this.itemSpeed = itemSpeed;
        const items = [];
        const numberOfItems = 1 + Math.floor(Math.random()*2)
        this.spaceBetweenItems = spaceBetweenItems || 50
        for(let i=0; i < numberOfItems; i++) {
            items.push(new itemType(x+i*(itemType.width + this.spaceBetweenItems), y, this))
        }
        this.items = items;
    }
    isItemIntersectingRow(frog) {
        return this.items.filter(item => item.isIntersectingItem(frog))
    }
    isRowOffScreen() {
        return this.x+this.items[0].x > width
    }
    drift() {
        this.x += this.itemSpeed
    }
    draw() {
        this.drift()
        this.items.forEach(item => {
            item.draw()
        })
    }
}