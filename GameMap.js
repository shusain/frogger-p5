import { MapLocation } from "./MapLocation.js";

export class GameMap {
    static tileSize = 50;
    static columnCount = 15;
    static rowCount = 8;
    constructor() {
        this.rows = [];
        this.createMap()
    }

    createMap() {
        for (let i = 0; i < GameMap.columnCount; i++) {
            let singleRow = [];
            for (let j = 0; j < GameMap.columnCount; j++) {
                let tileType = 'goalFail';
                if(i % 2 == 0) 
                    tileType = 'goalWin'
                if(j>0) {
                    tileType = 'water'
                }
                if(j>3) {
                    tileType = 'road'
                }
                if(j > GameMap.rowCount-2) {
                    tileType = 'grass'
                }
                const cell = new MapLocation(i*GameMap.tileSize, j*GameMap.tileSize, tileType);
                singleRow.push(cell);
            }
            this.rows.push(singleRow)
        }
    }

    findFrogOnMap(frog) {
        return this.rows[Math.floor(frog.x/GameMap.tileSize)][Math.floor(frog.y/GameMap.tileSize)]
    }

    draw() {
        strokeWeight(0)
        this.rows.forEach(row => {
            row.forEach(cell => {
                cell.draw();
            })
        })
    }
}