import { EntityLine } from "./EntityLine.js"

// ベクトル成分
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
    Object.freeze(this)
  }
  // 大きさ
  get length() {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }
  // 単位ベクトル
  get unit() {
    return this.multiply(1 / this.length)
  }
  // 法線ベクトル
  get normal() {
    return new Vector(this.y, -this.x)
  }
  // 合成
  add(vector) {
    if(!vector instanceof Vector) return
    return new Vector(this.x + vector.x, this.y + vector.y)
  }
  // スケール
  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar)
  }
  // 内積
  dot(vector) {
    if(!vector instanceof Vector) return
    return (this.x * vector.x) + (this.y * vector.y)
  }
  // 外積
  cross(vector) {
    if(!vector instanceof Vector) return
    return (this.x * vector.y) - (this.y * vector.x)
  }
  static forEntityLine(line) {
    if(!line instanceof EntityLine) return
    const x = line.end.x - line.start.x
    const y = line.end.y - line.start.y
    return new Vector(x, y)
  }
}

export { Vector }