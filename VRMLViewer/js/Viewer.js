
export class Viewer {
  #model
  constructor({ model }) {
    this.#model = model
  }
  paint() {
    CONTEXT.fillStyle = 'black'
    CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
    CONTEXT.strokeStyle = 'white'
    this.#model = this.#model.paint()
  }
}