import { Matrix } from './Matrix.js'; 

function check(value) {
  return (typeof value === 'number')
    && Number.isFinite(value)
    && !Number.isNaN(value)
}

export class Vector {
  constructor(x, y, z) {
    if(!check(x)) {
      console.error(`不正なx座標: ${x}`)
      return
    }
    if(!check(y)) {
      console.error(`不正なy座標: ${y}`)
      return
    }
    if(!check(z)) {
      console.error(`不正なz座標: ${z}`)
      return
    }
    this.x = x
    this.y = y
    this.z = z
    Object.freeze(this)
  }
  get isEmpty() {
    return Object.keys(this).length === 0
  }
  rotateY() {
    const m = Matrix.forRotateY(0.2).list
    const x = this.x * m[0] + this.y * m[1] + this.z * m[2]
    const y = this.x * m[3] + this.y * m[4] + this.z * m[5]
    const z = this.x * m[6] + this.y * m[7] + this.z * m[8]
    return new Vector(x, y, z)
  }
}