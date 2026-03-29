import { Vector } from './Vector.js';

export class Surface {
  #points
  constructor() {
    this.#points = []
  }
  get points() {
    return this.#points
  }
  get centerZ() {
    const p1 = this.#points[0]
    const p2 = this.#points[1]
    const p3 = this.#points[2]
    return (p1.z + p2.z + p3.z) / 3
  }
  get normal() {
    const p1 = this.#points[0]
    const p2 = this.#points[1]
    const p3 = this.#points[2]
    const v1 = new Vector(p1.x - p2.x, p1.y - p2.y, p1.z - p2.z)
    const v2 = new Vector(p1.x - p3.x, p1.y - p3.y, p1.z - p3.z)
    const x = v1.y * v2.z - v1.z * v2.y
    const y = v1.z * v2.x - v1.x * v2.z
    const z = v1.x * v2.y - v1.y * v2.x
    return new Vector(x, y, z)
  }
  push(point) {
    this.#points.push(point)
  }
}