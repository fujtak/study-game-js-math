function check(value) {
  return (typeof value === 'number')
    && Number.isFinite(value)
    && !Number.isNaN(value)
}

class Vector3D {
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
  scale(scalar) {
    return new Vector3D(
      this.x * scalar,
      this.y * scalar,
      this.z * scalar
    )
  }
}

export { Vector3D }