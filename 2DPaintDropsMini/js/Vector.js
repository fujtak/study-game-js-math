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
}

export { Vector }