import { GameMap } from "./GameMap.js";

export class BufferedGraphics {
    static bufferedGraphicsMap = {
        frog: null,
        grass: null,
        road: null,
        car: null,
        log: null,
        water: null,
        goalWin: null,
        goalFail: null
    }

    constructor() {
        this.drawBufferedGraphics()
    }
    
    drawCommonRect(pg, r, g, b) {
        pg.fill(r,g,b);
        pg.strokeWeight(0)
        pg.rect(0,0,GameMap.tileSize,GameMap.tileSize)
    }
    drawLog() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg, 255, 100, 50)
        pg.stroke(230, 100, 50)
        pg.strokeWeight(2)
        pg.line(5, GameMap.tileSize/2-10, GameMap.tileSize-10, GameMap.tileSize/2-10)
        pg.line(10, GameMap.tileSize/2, GameMap.tileSize-20, GameMap.tileSize/2)
        pg.line(30, GameMap.tileSize/2+10, GameMap.tileSize-10, GameMap.tileSize/2+10)
        strokeWeight(0)
        BufferedGraphics.bufferedGraphicsMap.log = pg
    }
    drawCar() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        pg.fill(0, 255, 255)
        pg.rect(0,GameMap.tileSize/2-GameMap.tileSize*.45, GameMap.tileSize*.9, GameMap.tileSize*.9)
        pg.fill(255, 0, 0)
        pg.rect(GameMap.tileSize-10,GameMap.tileSize/2-15, 10, 30)
        strokeWeight(0)
        BufferedGraphics.bufferedGraphicsMap.car = pg
    }
    drawRoad() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg, 50, 50, 50)
        pg.stroke(255)
        pg.strokeWeight(2)
        pg.line(10, GameMap.tileSize/2, GameMap.tileSize-10, GameMap.tileSize/2)
        strokeWeight(0)
        BufferedGraphics.bufferedGraphicsMap.road = pg
    }
    drawGoalWin() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg,0,0,255)
    
        BufferedGraphics.bufferedGraphicsMap.goalWin = pg
    }
    drawGoalFail() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg, 255, 0, 0)
    
        BufferedGraphics.bufferedGraphicsMap.goalFail = pg
    }
    drawWater() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg, 0, 0 , 255)
    
        BufferedGraphics.bufferedGraphicsMap.water = pg
    }
    drawGrass() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        this.drawCommonRect(pg, 0, 150, 70)
        pg.strokeWeight(2)
        pg.stroke(0, 200, 70)
        pg.line(10, 10, 10, 20)
        pg.line(30, 10, 30, 20)
        pg.line(20, 15, 20, 30)
        pg.line(40, 15, 40, 30)
        pg.strokeWeight(0)
    
        BufferedGraphics.bufferedGraphicsMap.grass = pg
    }
    drawFrog() {
        const pg = createGraphics(GameMap.tileSize, GameMap.tileSize)
        pg.fill(0, 255, 0)
        const footDistFromEdge = 15;
        const footSize = 10;
        const footDistDown = 10;
        pg.ellipse(GameMap.tileSize-footDistFromEdge, GameMap.tileSize-footDistFromEdge+footDistDown, footSize)
        pg.ellipse(footDistFromEdge, GameMap.tileSize-footDistFromEdge+footDistDown, footSize)
        pg.ellipse(GameMap.tileSize-footDistFromEdge, footDistFromEdge+footDistDown, footSize)
        pg.ellipse(footDistFromEdge, footDistFromEdge+footDistDown, footSize)
        pg.fill(255, 255, 0)
        pg.ellipse(GameMap.tileSize/2, GameMap.tileSize/2+10, GameMap.tileSize*.5)
        
        BufferedGraphics.bufferedGraphicsMap.frog = pg
    }
    
    drawBufferedGraphics() {
        this.drawGrass()
        this.drawWater()
        this.drawRoad()
        this.drawGoalFail()
        this.drawGoalWin()
        this.drawFrog()
        this.drawLog()
        this.drawCar()
    }
}