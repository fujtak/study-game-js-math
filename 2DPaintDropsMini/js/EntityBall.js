import { Position } from "./Position.js"

class EntityBall {
  #element
  #speed
  #size
  #position
  constructor(x) {
    this.#element = document.querySelector('[data-ball]')
    this.#speed = 1
    this.#size = 40
    this.#position = new Position(x, 0)
  }
  get #left() {
    return this.#position.x
  }
  get #right() {
    return this.#position.x + this.#size
  }
  get #top() {
    return this.#position.y
  }
  get #bottom() {
    return this.#position.y + this.#size
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
  #calculate() {
    this.#position = new Position(this.#position.x, this.#position.y + this.#speed)
  }
  #draw() {
    CONTEXT.drawImage(this.#element, this.#position.x, this.#position.y, this.#size, this.#size)
  }
  place() {
    this.#calculate()
    this.#draw()
  }
}

export { EntityBall }