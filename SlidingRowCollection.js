import { SlidingRowFactory } from "./SlidingRowFactory.js";

export class SlidingRowCollection {
    constructor(numberOfRows, rowType, itemType, yLocationOfRow, yOffsetPerRow, generatePerXFrames) {
        this.slidingRows = [];

        for (let i = 0; i < numberOfRows; i++) {
            const newSlidingRow = new SlidingRowFactory(rowType, itemType, yLocationOfRow + i*yOffsetPerRow, generatePerXFrames)
            this.slidingRows.push(newSlidingRow)            
        }
    }

    draw() {
        this.slidingRows.forEach(row => {
            row.draw()
        })
    }
    isItemIntersectingRow(frog) {
        return this.slidingRows.some(slidingRow => slidingRow.isItemIntersectingRow(frog))
    }
}