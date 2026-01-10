import { Position } from "./Position.js"

class EntityBall {
  #element
  #position
  constructor() {
    this.#element = document.querySelector('[data-ball]')
    this.#position = new Position(0, 0)
  }
  draw() {
    CONTEXT.drawImage(this.#element, this.#position.x, this.#position.y, 40, 40)
  }
}

export { EntityBall }