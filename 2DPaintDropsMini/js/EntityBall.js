import { Position } from "./Position.js"

class EntityBall {
  #element
  #position
  constructor(x) {
    this.#element = document.querySelector('[data-ball]')
    this.#position = new Position(x, 0)
  }
  draw() {
    CONTEXT.drawImage(this.#element, this.#position.x, this.#position.y, 40, 40)
  }
}

export { EntityBall }