import { Point } from "./Point.js"
import { Vector } from "./Vector.js"

class EntityBall {
  #element
  #size
  #point
  #speed
  constructor(x, y) {
    this.#element = document.querySelector('[data-ball]')
    this.#size = 40
    this.#point = y ? new Point(x, y) : new Point(x, -this.#size)
    this.#speed = 1
  }
  get center() {
    const sizeHalf = this.#size / 2
    return new Point(this.#point.x + sizeHalf, this.#point.y + sizeHalf)
  }
  get velocity() {
    return new Vector(0, this.#speed) // 向き: y軸方向, 大きさ: this.#speed
  }
  get isOnscreen() {
    const left = this.#point.x
    const right = this.#point.x + this.#size
    const top = this.#point.y
    const bottom = this.#point.y + this.#size
    const isOnscreenX = (0 <= right && left <= CONTEXT.canvas.width)
    const isOnscreenY = (0 <= bottom && top <= CONTEXT.canvas.height)
    return isOnscreenX && isOnscreenY
  }
  get nextForSimulation() {
    const nextPoint = this.#nextPoint
    return new EntityBall(nextPoint.x, nextPoint.y)
  }
  get #nextPoint() {
    const velocity = this.velocity
    const x = this.#point.x + velocity.x
    const y = this.#point.y + velocity.y
    return new Point(x, y)
  }
  #update() {
    this.#point = this.#nextPoint
  }
  #draw() {
    CONTEXT.drawImage(this.#element, this.#point.x, this.#point.y, this.#size, this.#size)
  }
  place() {
    this.#update()
    this.#draw()
  }
}

export { EntityBall }