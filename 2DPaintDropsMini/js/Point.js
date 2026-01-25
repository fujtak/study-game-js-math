// 座標
class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
    Object.freeze(this)
  }
}

export { Point }