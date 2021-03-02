export class SlidingRowFactory {
    constructor(rowType, itemType, yLocationOfRow, generatePerXFrames = 300, spaceBetween = 50, itemSpeed=1) {
        this.rowType = rowType;
        this.yLocationOfRow = yLocationOfRow;
        this.generatePerXFrames = generatePerXFrames;
        this.itemType = itemType
        this.spaceBetween = spaceBetween
        this.itemSpeed = itemSpeed;

        this.items = [];
        this.addNewItem()
    }
    addNewItem() {
        this.items.push(new this.rowType(-this.spaceBetween*2 - Math.floor(Math.random()*this.spaceBetween), this.yLocationOfRow, this.itemType, this.spaceBetween, this.itemSpeed))
    }

    draw() {
        this.items.forEach(row => {
            row.draw()
        })
        if(frameCount%this.generatePerXFrames == 0) {
            this.addNewItem()
        }
        this.removeItemsOffScreen()
    }
    removeItemsOffScreen() {
        return this.items = this.items.filter(row => !row.isRowOffScreen())
    }
    isItemIntersectingRow(frog) {
        return this.items.filter(driftingRow => driftingRow.isItemIntersectingRow(frog).length>0)
    }
}