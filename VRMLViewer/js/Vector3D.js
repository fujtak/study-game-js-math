class Vector3D {
  constructor(x, y, z) {
    this.x = x
    this.y = y
    this.z = z
    Object.freeze(this)
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