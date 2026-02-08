class Vector3D {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    Object.freeze(this)
  }
}

export { Vector3D }