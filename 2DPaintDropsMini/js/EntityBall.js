import { Position } from "./Position.js"

class EntityBall {
  #element
  #speed
  #position
  constructor(x) {
    this.#element = document.querySelector('[data-ball]')
    this.#speed = 1
    this.#position = new Position(x, 0)
  }
  draw() {
    this.#position = new Position(this.#position.x, this.#position.y + this.#speed)
    CONTEXT.drawImage(this.#element, this.#position.x, this.#position.y, 40, 40)
  }
}

export { EntityBall }