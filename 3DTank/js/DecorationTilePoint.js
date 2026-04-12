import { keyboardPressing } from "./KeyboardPressing.js";
export class DecorationTilePoint {
    vector;
    speed;
    constructor(vector) {
        this.vector = vector;
        this.speed = 0.5;
    }
    get v() {
        return this.vector;
    }
    update() {
        const isLeft = keyboardPressing.has('ArrowLeft');
        const isRight = keyboardPressing.has('ArrowRight');
        const isUp = keyboardPressing.has('ArrowUp');
        const isDown = keyboardPressing.has('ArrowDown');
        const rotated = (isLeft && isRight) ? this.vector
            : isLeft ? this.vector.rotateHorizontal(1)
                : isRight ? this.vector.rotateHorizontal(-1)
                    : this.vector;
        const moved = (isUp && isDown) ? rotated
            : isUp ? rotated.add(0, 0, -this.speed)
                : isDown ? rotated.add(0, 0, this.speed)
                    : rotated;
        return new DecorationTilePoint(moved);
    }
}
