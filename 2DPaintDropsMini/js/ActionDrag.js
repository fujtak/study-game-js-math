import { Position } from "./Position.js"
import { lineDragger } from "./ActionDragLine.js"

class ActionDrag {
  constructor(lines) {
    this.lines = lines
    this.dragging = lineDragger
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#start(e))
    CONTEXT.canvas.addEventListener('mouseup', () => this.#end())
    CONTEXT.canvas.addEventListener('mousemove', (e) => this.#update(e))
  }
  #start(e) {
    if(this.dragging.isActive) return
    const start = new Position(e.offsetX, e.offsetY)
    this.dragging.init(start)
  }
  #end() {
    if(!this.dragging.isActive) return
    this.lines.push(this.dragging.line)
    this.dragging.clean()
  }
  #update(e) {
    if(!this.dragging.isActive) return
    const end = new Position(e.offsetX, e.offsetY)
    this.dragging.update(end)
  }
  draw() {
    this.dragging.draw()
  }
}

export { ActionDrag }