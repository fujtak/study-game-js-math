import { CONTEXT } from "./CONTEXT.js";
import { Vector } from "./Vector.js";
import { TilePoint } from "./TilePoint.js";
export class Tile {
    static size = 10;
    y;
    points;
    constructor(x, z) {
        this.y = -5;
        this.points = [
            new TilePoint(new Vector(x, this.y, z)),
            new TilePoint(new Vector(x + Tile.size, this.y, z)),
            new TilePoint(new Vector(x + Tile.size, this.y, z - Tile.size)),
            new TilePoint(new Vector(x, this.y, z - Tile.size)),
        ];
    }
    paint() {
        CONTEXT.strokeStyle = 'white';
        CONTEXT.lineWidth = 1;
        CONTEXT.beginPath();
        const offsetX = CONTEXT.canvas.width / 2;
        const offsetY = CONTEXT.canvas.height / 2;
        const scale = 1000;
        for (let i = 0; i < this.points.length; ++i) {
            this.points[i] = this.points[i].update();
            const v = this.points[i].v;
            if (v.z < 0) {
                continue;
            }
            const x = (v.x * scale / v.z) + offsetX;
            const y = -(v.y * scale / v.z) + offsetY;
            if (i === 0) {
                CONTEXT.moveTo(x, y);
                continue;
            }
            CONTEXT.lineTo(x, y);
        }
        CONTEXT.stroke();
    }
}
