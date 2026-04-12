import { Matrix } from "./Matrix.js";
export class Vector {
    x;
    y;
    z;
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(x, y, z) {
        return new Vector(this.x + x, this.y + y, this.z + z);
    }
    rotateHorizontal(degree) {
        const m = Matrix.forRotateHorizontal(degree);
        const x = m[0] * this.x + m[1] * this.y + m[2] * this.z;
        const y = m[3] * this.x + m[4] * this.y + m[5] * this.z;
        const z = m[6] * this.x + m[7] * this.y + m[8] * this.z;
        return new Vector(x, y, z);
    }
}
