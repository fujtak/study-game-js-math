import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

class ActionLine {
  #lines
  #active
  constructor(lines) {
    this.#lines = lines
    this.#active = null
    this.#addEventListener()
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#onMousedown(e))
    CONTEXT.canvas.addEventListener('mouseup', (e) => this.#onMouseup(e))
    CONTEXT.canvas.addEventListener('mousemove', (e) => this.#onMousemove(e))
  }
  #onMousedown(e) {
    const start = new Position(e.offsetX, e.offsetY)
    const end = new Position(e.offsetX, e.offsetY)
    const line = new EntityLine(start, end)
    this.#active = line
  }
  #onMouseup(e) {
    this.#lines.push(this.#active)
    this.#active = null
  }
  #onMousemove(e) {
    if(!this.#active) return
    const start = this.#active.start
    const end = new Position(e.offsetX, e.offsetY)
    const line = new EntityLine(start, end)
    this.#active = line
  }
  draw() {
    if(!this.#active) return
    this.#active.draw()
  }
}

export { ActionLine }