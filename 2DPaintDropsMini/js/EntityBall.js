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
  }
  get #left() {
    return this.#point.x
  }
  get #right() {
    return this.#point.x + this.#size
  }
  get #top() {
    return this.#point.y
  }
  get #bottom() {
    return this.#point.y + this.#size
  }
  get #isOnscreenX() {
    return 0 <= this.#right && this.#left <= CONTEXT.canvas.width
  }
  get #isOnscreenY() {
    return 0 <= this.#bottom && this.#top <= CONTEXT.canvas.height
  }
  get isOnscreen() {
    return this.#isOnscreenX && this.#isOnscreenY
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