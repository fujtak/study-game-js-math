class ModelPointList {
  constructor({ list }) {
    if(!Array.isArray(list) || !list.length >= 1) {
      console.error(`不正な頂点座標の配列: ${list}`)
      return
    }
    this.list = list
    Object.freeze(this)
  }
  get #first() {
    return this.list[0]
  }
  get #distanceMax() {
    const first = Math.sqrt(this.#first.x ** 2 + this.#first.y ** 2)
    const max = this.list.reduce((prev, current) => {
      const distance = Math.sqrt(current.x ** 2 + current.y ** 2)
      return Math.max(prev, distance)
    }, first)
    return max
  }
  paint() {
    const scaleForFitScreen = Math.min(
      CONTEXT.canvas.width / this.#distanceMax,
      CONTEXT.canvas.height / this.#distanceMax
    )
    for(const point of this.list) {
      const offsetX = CONTEXT.canvas.width / 2
      const offsetY = CONTEXT.canvas.height / 2
      const cameraZ = 3
      const z = point.z + cameraZ
      const x = (point.x * scaleForFitScreen / z) + offsetX
      const y = (-point.y * scaleForFitScreen / z) + offsetY // y軸を反転させる（VRMLのy軸仕様とcanvasのy軸仕様で正負が逆のため）
      const size = 6
      CONTEXT.fillRect(x, y, size, size)
    }
  }
}

export { ModelPointList }