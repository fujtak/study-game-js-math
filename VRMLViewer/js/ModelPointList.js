class ModelPointList {
  constructor({ pointList, pathList }) {
    if(!Array.isArray(pointList) || !pointList.length >= 1) {
      console.error(`不正な頂点座標の配列: ${pointList}`)
      return
    }
    if(!Array.isArray(pathList) || !pathList.length >= 1) {
      console.error(`不正なパスの配列: ${pathList}`)
      return
    }
    this.pointList = pointList
    this.pathList = pathList
    Object.freeze(this)
  }
  get #first() {
    return this.pointList[0]
  }
  get #distanceMax() {
    const first = Math.sqrt(this.#first.x ** 2 + this.#first.y ** 2)
    const max = this.pointList.reduce((prev, current) => {
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
    const offsetX = CONTEXT.canvas.width / 2
    const offsetY = CONTEXT.canvas.height / 2
    const cameraZ = 3
    const rotatedList = this.pointList
    for(const path of this.pathList) {
      CONTEXT.beginPath()
      for(let i = 0; i < path.length; ++i) {
        const index = path[i]
        const point = rotatedList[index]
        const rotated = point.rotateY()
        const z = rotated.z + cameraZ
        const x = (rotated.x * scaleForFitScreen / z) + offsetX
        const y = (-rotated.y * scaleForFitScreen / z) + offsetY  // y軸を反転させる（VRMLのy軸仕様とcanvasのy軸仕様で正負が逆のため）
        rotatedList[index] = rotated
        i === 0 ? CONTEXT.moveTo(x, y) : CONTEXT.lineTo(x, y)
      }
      CONTEXT.stroke()
    }
    return new ModelPointList({ pointList: rotatedList , pathList: this.pathList })
  }
}

export { ModelPointList }