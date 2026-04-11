import { CONTEXT } from "./CONTEXT.js";
import { Vector } from "./Vector.js";
import { keyboardPressing } from "./KeyboardPressing.js";
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
        const offsetX = CONTEXT.canvas.width / 2;
        const offsetY = CONTEXT.canvas.height / 2;
        const scale = 1000;
        const isLeft = keyboardPressing.has('ArrowLeft');
        const isRight = keyboardPressing.has('ArrowRight');
        for (let i = 0; i < this.points.length; ++i) {
            this.points[i] = (isLeft && isRight) ? this.points[i]
                : isLeft ? this.points[i].rotateHorizontal(1)
                    : isRight ? this.points[i].rotateHorizontal(-1)
                        : this.points[i];
            const yOrigin = -(this.points[i].y * scale / this.points[i].z);
            if (yOrigin < 0)
                continue;
            const y = yOrigin + offsetY;
            const x = (this.points[i].x * scale / this.points[i].z) + offsetX;
            if (i === 0) {
                CONTEXT.moveTo(x, y);
                continue;
            }
            CONTEXT.lineTo(x, y);
        }
        CONTEXT.stroke();
    }
}
