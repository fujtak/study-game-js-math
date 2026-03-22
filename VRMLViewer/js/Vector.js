import { Matrix } from './Matrix.js'; 

export class Vector {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    Object.freeze(this)
  }
  get isEmpty() {
    return Object.keys(this).length === 0
  }
  rotateY() {
    const m = Matrix.forRotateY(0.1).list
    const x = this.x * m[0] + this.y * m[1] + this.z * m[2]
    const y = this.x * m[3] + this.y * m[4] + this.z * m[5]
    const z = this.x * m[6] + this.y * m[7] + this.z * m[8]
    return new Vector(x, y, z)
  }
}