import { Position } from './Position.js'
import { LineStroked } from "./LineStroked.js"

class LineStrokedList {
  #lines
  constructor() {
    this.#lines = []
    this.#addEventListener()
  }
  get #lineLatest() {
    return this.#lines.at(-1)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', this.#onMousedown.bind(this))
    CONTEXT.canvas.addEventListener('mouseup', this.#onMouseup.bind(this))
  }
  #onMousedown(e) {
    this.#add(new Position({ x: e.offsetX, y: e.offsetY }))
  }
  #onMouseup(e) {
    this.#lineLatest.removeMousemoveEventListener()
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