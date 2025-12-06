import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

class ActionLine {
  constructor(lines) {
    this.lines = lines
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#onMousedown(e))
    CONTEXT.canvas.addEventListener('mouseup', (e) => this.#onMouseup(e))
  }
  #onMousedown(e) {
    const start = new Position(e.offsetX, e.offsetY)
    const end = new Position(e.offsetX, e.offsetY)
    const line = new EntityLine(start, end)
    this.lines.push(line)
  }
  #onMouseup(e) {
    const start = this.lines.latest.start
    const end = new Position(e.offsetX, e.offsetY)
    const line = new EntityLine(start, end)
    this.lines.updateLatest(line)
  }
}

export { ActionLine }