export class SlidingRowFactory {
    constructor(rowType, itemType, yLocationOfRow, generatePerXFrames = 300) {
        this.rowType = rowType;
        this.yLocationOfRow = yLocationOfRow;
        this.generatePerXFrames = generatePerXFrames;
        this.itemType = itemType

        this.items = [];
        this.items.push(new this.rowType(0 - Math.floor(Math.random()*200), this.yLocationOfRow, this.itemType))
    }

    draw() {
        this.items.forEach(row => {
            row.draw()
        })
        if(frameCount%this.generatePerXFrames == 0) {
            this.items.push(new this.rowType(-200 - Math.floor(Math.random()*50), this.yLocationOfRow, this.itemType))
        }
        this.removeItemsOffScreen()
    }
    removeItemsOffScreen() {
        return this.items = this.items.filter(row => !row.isRowOffScreen())
    }
    isItemIntersectingRow(frog) {
        return this.items.some(driftingRow => driftingRow.isItemIntersectingRow(frog))
    }
}