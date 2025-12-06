import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

class ActionLine {
  constructor(lines) {
    this.lines = lines
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => {
      const start = new Position(e.offsetX, e.offsetY)
      const end = new Position(500, 300)
      const line = new EntityLine(start, end)
      this.lines.push(line)
    })
  }
}

export { ActionLine }