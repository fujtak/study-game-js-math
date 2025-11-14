import { Position } from './Position.js'
import { LineStroked } from "./LineStroked.js"

class LineStrokedList {
  #lines
  #countMousedown
  constructor() {
    this.#lines = []
    this.#countMousedown = 0
    this.#addEventListener()
  }
  get #lineLatest() {
    return this.#lines.at(-1)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', this.#onMousedown.bind(this))
  }
  #onMousedown(e) {
    ++this.#countMousedown
    if(this.#countMousedown % 2 === 0) {
      this.#lineLatest.removeEventListener()
    } else {
      this.#add(new Position({ x: e.offsetX, y: e.offsetY }))
    }
  }
  #add(start) {
    const line = new LineStroked({ start })
    this.#lines.push(line)
  }
  draw() {
    for(const line of this.#lines) {
      line.draw()
    }
  }
}

export { LineStrokedList }