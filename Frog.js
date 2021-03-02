import { BufferedGraphics } from "./BufferedGraphics.js";
import { GameMap } from "./GameMap.js";

export class Frog {
    constructor(x, y) {
        this.startX = x || 0;
        this.startY = y || 0;
        this.x = x || 0;
        this.y = y || 0;
        this.z = 1;
        this.width = GameMap.tileSize;
        this.height = GameMap.tileSize;
        this.jumpDistance = GameMap.tileSize;
        this.targetY = this.y;
        this.targetX = this.x;
        this.isMoving = false;
        this.isDriftingWithLog = false;
    }
    
    resetPosition() {
        this.x = this.startX;
        this.y = this.startY;
        this.targetX = this.x;
        this.targetY = this.y;
        this.isDriftingWithLog = false;
        this.drawFrog();
    }
    drawFrog() {
        const isNotAtTargetX = this.targetX != this.x;
        const isNotAtTargetY = this.targetY != this.y;
        if(isNotAtTargetX || isNotAtTargetY){
            let prop1 = 'targetX';
            let prop2 = 'x';
            if(!isNotAtTargetX) {
                prop1 = 'targetY';
                prop2 = 'y';
            }
            let targetAndActualDiff = this[prop1] - this[prop2];
            let moveBy = (targetAndActualDiff)/3
            if(Math.abs(targetAndActualDiff) < 1) {
                moveBy = (targetAndActualDiff)
            }
            this[prop2] += moveBy;
            this.z = 1+Math.abs(moveBy/80);
        } else {
            this.isMoving = false;
            this.z = 1;
        }
        if(this.isDriftingWithLog) {
            this.x += this.isDriftingWithLog.itemSpeed;
            this.targetX = this.x;
        }
        image(BufferedGraphics.bufferedGraphicsMap.frog, this.x - GameMap.tileSize*.5*this.z, this.y - GameMap.tileSize*.5*this.z, GameMap.tileSize*this.z, GameMap.tileSize*this.z)
        // fill(255,0,0)
        // ellipse(this.x, this.y, 10)
    }
    moveLeft() {
        if(!this.isMoving) {
            this.targetX = this.x - this.jumpDistance;
            if(this.targetX < 0) {
                this.targetX = this.x;
                return;
            }
            this.isMoving = true;
        }
    }
    moveRight() {
        if(!this.isMoving) {
            this.targetX = this.x + this.jumpDistance;
            if(this.targetX > width) {
                this.targetX = this.x;
                return;
            }
            this.isMoving = true;
        }
    }
    moveUp() {
        if(!this.isMoving) {
            this.targetY = this.y - this.jumpDistance;
            if(this.targetY < 0) {
                this.targetY = this.y;
                return;
            }
            this.isMoving = true;
        }
    }
    moveDown() {
        if(!this.isMoving) {
            this.targetY = this.y + this.jumpDistance;
            if(this.targetY > height) {
                this.targetY = this.y;
                return
            }
            this.isMoving = true;
        }
    }
}