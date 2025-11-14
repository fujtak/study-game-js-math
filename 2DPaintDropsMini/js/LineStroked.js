import { Position } from './Position.js'
import { EntityLineStroked } from './EntityLineStroked.js'

class LineStroked {
  #line
  constructor() {
    this.#line = null
    this.#addEventListener()
  }
  #set(start) {
    this.#line = this.#line ? null : new EntityLineStroked({ start })
  }
  #update(end) {
    if(!this.#line) return
    this.#line = this.#line.update(end)
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousedown', (e) => this.#set(new Position({ x: e.offsetX, y: e.offsetY })))
    CONTEXT.canvas.addEventListener('mousemove', (e) => this.#update(new Position({ x: e.offsetX, y: e.offsetY })))
  }
  draw() {
    if(!this.#line) return
    this.#line.draw()
  }
}

export { LineStroked }