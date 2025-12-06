import { Position } from "./Position.js"
import { ActionDragLine } from "./ActionDragLine.js"

class ActionDrag {
  constructor(lines) {
    this.lines = lines
    this.dragging = new ActionDragLine()
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#onMousedown(e))
    CONTEXT.canvas.addEventListener('mouseup', () => this.#onMouseup())
    CONTEXT.canvas.addEventListener('mousemove', (e) => this.#onMousemove(e))
  }
  #onMousedown(e) {
    if(this.dragging.isActive) return
    const start = new Position(e.offsetX, e.offsetY)
    this.dragging.init(start)
  }
  #onMouseup() {
    if(!this.dragging.isActive) return
    this.lines.push(this.dragging.line)
    this.dragging.clean()
  }
  #onMousemove(e) {
    if(!this.dragging.isActive) return
    const end = new Position(e.offsetX, e.offsetY)
    this.dragging.update(end)
  }
  draw() {
    this.dragging.draw()
  }
}

export { ActionDrag }