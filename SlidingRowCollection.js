import { SlidingRowFactory } from "./SlidingRowFactory.js";

export class SlidingRowCollection {
    constructor(numberOfRows, rowType, itemType, yLocationOfRow, yOffsetPerRow, generatePerXFrames, spaceBetween, itemSpeed) {
        this.slidingRows = [];

        for (let i = 0; i < numberOfRows; i++) {
            const newSlidingRow = new SlidingRowFactory(rowType, itemType, yLocationOfRow + i*yOffsetPerRow, generatePerXFrames, spaceBetween, itemSpeed)
            this.slidingRows.push(newSlidingRow)            
        }
    }

    draw() {
        this.slidingRows.forEach(row => {
            row.draw()
        })
    }
    isItemIntersectingRow(frog) {
        return this.slidingRows.filter(slidingRow => slidingRow.isItemIntersectingRow(frog).length>0)
    }
}