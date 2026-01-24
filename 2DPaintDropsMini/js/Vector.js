import { EntityLine } from "./EntityLine.js"

// ベクトル成分
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
    Object.freeze(this)
  }
  // 外積
  cross(vector) {
    if(!vector instanceof Vector) return
    return (this.x * vector.x) - (this.y * vector.y)
  }
  static forEntityLine(line) {
    if(!line instanceof EntityLine) return
    const x = line.end.x - line.start.x
    const y = line.end.y - line.start.y
    return new Vector(x, y)
  }
}

export { Vector }