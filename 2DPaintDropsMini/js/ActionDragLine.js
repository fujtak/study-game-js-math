import { EntityLine } from "./EntityLine.js"
import { colorSelector } from "./ActionSelectColor.js"

class ActionDragLine {
  #line
  #colorSelector
  constructor() {
    this.#line = null
    this.#colorSelector = colorSelector
  }
  get line() {
    return this.#line
  }
  get isActive() {
    return Boolean(this.#line)
  }
  init(start) {
    this.#line = new EntityLine(start, start, this.#colorSelector.color)
  }
  update(end) {
    if(!this.#line) return
    this.#line = new EntityLine(this.#line.start, end, this.#colorSelector.color)
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