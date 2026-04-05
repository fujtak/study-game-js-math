import { CONTEXT } from "./CONTEXT.js";
import { Vector } from "./Vector.js";
export class DecorationTile {
    static size = 10;
    y;
    points;
    constructor(x, z) {
        this.y = -5;
        this.points = [
            new Vector(x, this.y, z),
            new Vector(x + DecorationTile.size, this.y, z),
            new Vector(x + DecorationTile.size, this.y, z - DecorationTile.size),
            new Vector(x, this.y, z - DecorationTile.size),
        ];
    }
    paint() {
        CONTEXT.strokeStyle = 'white';
        CONTEXT.beginPath();
        const scale = 1000;
        const offsetX = CONTEXT.canvas.width / 2;
        const offsetY = CONTEXT.canvas.height / 2;
        for (let i = 0; i < this.points.length; ++i) {
            const point = this.points[i];
            const x = (point.x * scale / point.z) + offsetX;
            const y = -(point.y * scale / point.z) + offsetY; // y軸を反転させる
            if (i === 0) {
                CONTEXT.moveTo(x, y);
                continue;
            }
            CONTEXT.lineTo(x, y);
        }
        CONTEXT.stroke();
    }
}
