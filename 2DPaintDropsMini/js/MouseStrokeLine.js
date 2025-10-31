import { Position } from './Position.js'
import { EntityLineStroked } from './EntityLineStroked.js'

class MouseStrokeLine {
  #line
  constructor() {
    this.#line = null
    this.#addEventListener()
  }
  #set(start) {
    this.#line = new EntityLineStroked({ start })
  }
  #update(end) {
    if(!this.#line) return
    this.#line = this.#line.update(end)
  }
  #addEventListener() {
    ctx.canvas.addEventListener('mousedown', (e) => this.#set(new Position({ x: e.offsetX, y: e.offsetY })))
    ctx.canvas.addEventListener('mousemove', (e) => this.#update(new Position({ x: e.offsetX, y: e.offsetY })))
  }
  draw() {
    if(!this.#line) return
    this.#line.draw()
  }
}

export { MouseStrokeLine }