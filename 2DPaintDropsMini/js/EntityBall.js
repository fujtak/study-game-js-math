import { Point } from "./Point.js"

class EntityBall {
  #element
  #speed
  #size
  #point
  constructor(x) {
    this.#element = document.querySelector('[data-ball]')
    this.#speed = 1
    this.#size = 40
    this.#point = new Point(x, -this.#size)
    this.#speed = 1
    this.#velocity = 
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
  get center() {
    const sizeHalf = this.#size / 2
    return new Point(this.#point.x + sizeHalf, this.#point.y + sizeHalf)
  }
  #calculate() {
    this.#point = new Point(this.#point.x, this.#point.y + this.#speed)
  }
  #draw() {
    CONTEXT.drawImage(this.#element, this.#point.x, this.#point.y, this.#size, this.#size)
  }
  place() {
    this.#calculate()
    this.#draw()
  }
}

export { EntityBall }