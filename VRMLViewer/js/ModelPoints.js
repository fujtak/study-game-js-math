import { Vector } from "./Vector.js";
import { Surface } from "./Surface.js";

export class ModelPoints {
  constructor({ points, path }) {
    this.points = points
    this.path = path
    Object.freeze(this)
  }
  get #size() {
    const first = Math.sqrt(this.points[0].x ** 2 + this.points[0].y ** 2)
    const max = this.points.reduce((prev, current) => {
      const distance = Math.sqrt(current.x ** 2 + current.y ** 2)
      return Math.max(prev, distance)
    }, first)
    return max
  }
  #surfaces(points) {
    const surfaces = []
    for(const path of this.path) {
      const surface = new Surface()
      for(let i = 0; i < path.length; ++i) {
        const index = path[i]
        const point = points[index]
        surface.push(point)
      }
      surfaces.push(surface)
    }
    return surfaces.sort((a, b) => b.centerZ - a.centerZ)
  }
  paint() {
    const scaleForFitScreen = Math.min(CONTEXT.canvas.width / this.#size, CONTEXT.canvas.height / this.#size)
    const offsetX = CONTEXT.canvas.width / 2
    const offsetY = CONTEXT.canvas.height / 2
    const cameraZ = 3
    const points = this.points.map(point => point.rotateY())
    const surfaces = this.#surfaces(points)
    const light = new Vector(1, -1, -1).unit()
    for(const surface of surfaces) {
      CONTEXT.beginPath()
      for(let i = 0; i < surface.points.length; ++i) {
        const point = surface.points[i]
        const z = point.z + cameraZ
        const x = (point.x * scaleForFitScreen / z) + offsetX
        const y = (-point.y * scaleForFitScreen / z) + offsetY  // y軸を反転させる（VRMLのy軸仕様とcanvasのy軸仕様で正負が逆のため）
        i === 0 ? CONTEXT.moveTo(x, y) : CONTEXT.lineTo(x, y)
      }
      const dot = light.dot(surface.normal.unit())
      const radio = (dot + 1) / 2
      const brightness = radio * 255
      CONTEXT.fillStyle = `rgb(${brightness} ${brightness} ${brightness})`
      CONTEXT.fill()
      CONTEXT.closePath()
    }
    return new ModelPoints({ points: points , path: this.path })
  }
}