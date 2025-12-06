import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

class ActionLine {
  constructor(lines) {
    this.lines = lines
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', () => {
      const line = new EntityLine(new Position(300, 100), new Position(500, 300))
      this.lines.push(line)
    })
  }
}

export { ActionLine }