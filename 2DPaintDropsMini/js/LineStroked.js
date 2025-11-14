import { Position } from './Position.js'
import { EntityLineStroked } from './EntityLineStroked.js'

class LineStroked {
  #line
  #boundOnMousemove
  constructor({ start }) {
    this.#line = new EntityLineStroked({ start })
    this.#boundOnMousemove = this.#onMousemove.bind(this)
    this.#addEventListener()
  }
  #onMousemove(e) {
    this.update(new Position({ x: e.offsetX, y: e.offsetY }))
  }
  #addEventListener() {
    CONTEXT.canvas.addEventListener('mousemove', this.#boundOnMousemove)
  }
  removeEventListener() {
    CONTEXT.canvas.removeEventListener('mousemove', this.#boundOnMousemove)
  }
  update(end) {
    if(!this.#line) return
    this.#line = this.#line.update(end)
  }
  draw() {
    if(!this.#line) return
    this.#line.draw()
  }
}

export { LineStroked }