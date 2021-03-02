export class DriftingRow {
    constructor(x, y, itemType) {
        this.x = x
        const logs = [];
        const numberOfLogs = 1 + Math.floor(Math.random()*3)
        const spaceBetweenLogs = 50
        for(let i=0; i < numberOfLogs; i++) {
            logs.push(new itemType(x+i*(itemType.width + spaceBetweenLogs), y, this))
        }
        this.logs = logs;
    }
    isItemIntersectingRow(frog) {
        return this.logs.some(log => log.isIntersectingItem(frog))
    }
    isRowOffScreen() {
        return this.x+this.logs[0].x > width
    }
    drift() {
        this.x += 1
    }
    draw() {
        this.drift()
        this.logs.forEach(log => {
            log.draw()
        })
    }
}