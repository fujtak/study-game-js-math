
export class Matrix {
  constructor(list) {
    this.list = list
    Object.freeze
  }
  static forRotateY(degree) {
    const theta = degree * Math.PI / 180
    const s = Math.sin(theta)
    const c = Math.cos(theta)
    const u = [1, 0, 0, 0, 1, 0, 0, 0, 1]
    const m = []
    m[0] = u[0] * c - u[2] * s
    m[1] = u[1]
    m[2] = u[0] * s + u[2] * c
    m[3] = u[3] * c - u[5] * s
    m[4] = u[4]
    m[5] = u[3] * s + u[5] * c
    m[6] = u[6] * c - u[8] * s
    m[7] = u[7]
    m[8] = u[6] * s + u[8] * c
    return new Matrix(m)
  }
}