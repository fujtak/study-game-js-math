import { Point } from "./Point.js"
import { lineDragging } from "./EntityLineDragging.js"

class ActionDrag {
  constructor(lines) {
    this.lines = lines
    this.dragging = lineDragging
    this.#addEventListener()
    Object.freeze(this)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#start(e))
    CONTEXT.canvas.addEventListener('mouseup', () => this.#end())
    CONTEXT.canvas.addEventListener('mousemove', (e) => this.#calculate(e))
  }
  #start(e) {
    if(this.dragging.isActive) return
    const start = new Point(e.offsetX, e.offsetY)
    this.dragging.init(start)
  }
  #end() {
    if(!this.dragging.isActive) return
    this.lines.push(this.dragging.line)
    this.dragging.clean()
  }
  #calculate(e) {
    if(!this.dragging.isActive) return
    const end = new Point(e.offsetX, e.offsetY)
    this.dragging.update(end)
  }
  update() {
    this.dragging.draw()
  }
}

export { ActionDrag }