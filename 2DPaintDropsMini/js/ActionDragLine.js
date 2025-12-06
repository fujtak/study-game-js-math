import { EntityLine } from "./EntityLine.js"

class ActionDragLine {
  #line
  constructor() {
    this.#line = null
  }
  get line() {
    return this.#line
  }
  get isActive() {
    return Boolean(this.#line)
  }
  init(start) {
    this.#line = new EntityLine(start, start)
  }
  update(end) {
    if(!this.#line) return
    this.#line = new EntityLine(this.#line.start, end)
  }
  clean() {
    this.#line = null
  }
  draw() {
    if(!this.#line) return
    this.#line.draw()
  }
}

export { ActionDragLine }