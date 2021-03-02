import { BufferedGraphics } from "./BufferedGraphics.js";
import { Frog } from "./Frog.js";
import { GameMap } from "./GameMap.js";
import { DriftingRow } from "./DriftingRow.js";
import { SlidingRowCollection } from "./SlidingRowCollection.js";
import { Log } from "./Log.js";
import { Car } from "./Car.js";

export class FroggerMain {
    static score = 0;
    static lives = 3;
    static level = 1;

    static frog;
    static map;
    static bufferedGraphics;
    static logManager = new SlidingRowCollection(3, DriftingRow, Log, GameMap.tileSize+10, GameMap.tileSize, 300, GameMap.tileSize*2, Math.random()*1);
    static carManager = new SlidingRowCollection(3, DriftingRow, Car, GameMap.tileSize*4+10, GameMap.tileSize, 300, GameMap.tileSize*5, 1+Math.random()*3);

    constructor() {
        
        window.setup = () => {
            frameRate(60)
            createCanvas(GameMap.columnCount*GameMap.tileSize, GameMap.rowCount*GameMap.tileSize);
            FroggerMain.bufferedGraphics = new BufferedGraphics()
        
            // Create Frog
            FroggerMain.frog = new Frog(GameMap.tileSize/2, GameMap.rowCount*GameMap.tileSize - GameMap.tileSize/2);
            
            // Create one game map
            FroggerMain.map = new GameMap();
        }
        
        
        window.draw = () => {
            FroggerMain.map.draw()
            FroggerMain.logManager.draw()
            FroggerMain.carManager.draw()
            FroggerMain.frog.drawFrog()
            FroggerMain.drawScoresAndLives()
        
            // Checks if frog has landed. If so need to see where it is on the map and
            // based on that need to potentially check intersections against either cars or logs
            if(!FroggerMain.frog.isMoving) {

                let mapLocation = FroggerMain.map.findFrogOnMap(FroggerMain.frog)
                
                if(mapLocation.tileType === 'goalWin') {
                    FroggerMain.score += 100
                    FroggerMain.frog.resetPosition()
                }
                
                if(mapLocation.tileType === 'goalFail') {
                    FroggerMain.lives--;
                    FroggerMain.frog.resetPosition()
                }
                
                if(mapLocation.tileType === 'water') {
                    // Check if frog is on log if not frog is dead
                    const foundLog = FroggerMain.logManager.isItemIntersectingRow(FroggerMain.frog)
                    if(foundLog.length>0) {
                        FroggerMain.frog.isDriftingWithLog = foundLog[0]
                    } else {
                        FroggerMain.frog.isDriftingWithLog = false
                        FroggerMain.lives--
                        FroggerMain.frog.resetPosition()
                    }

                }
                
                if(mapLocation.tileType === 'road') {
                    FroggerMain.frog.isDriftingWithLog = false
                    // Check if frog is being hit by a car if so, frog is dead
                    const foundCar = FroggerMain.carManager.isItemIntersectingRow(FroggerMain.frog)
                    debugger
                    if(foundCar.length>0) {
                        FroggerMain.frog.isDriftingWithLog = false
                        FroggerMain.lives--
                        FroggerMain.frog.resetPosition()
                    }
                }
            }
        }
        
        window.keyPressed = () => {
            switch(key) {
                case 'ArrowLeft':
                    FroggerMain.frog.moveLeft();
                    break;
                case 'ArrowRight':
                    FroggerMain.frog.moveRight();
                    break;
                case 'ArrowDown':
                    FroggerMain.frog.moveDown();
                    break;
                case 'ArrowUp':
                    FroggerMain.frog.moveUp();
                    break;
            }
        }
        
    }
    static drawScoresAndLives() {
        text(`Score: ${FroggerMain.score}`, width-80, height-40, width, height-20)
        text(`Lives: ${FroggerMain.lives}`, width-80, height-20, width, height)
    }
}