class Viewer {
  constructor({ model }) {
    this.model = model
    Object.freeze(this)
  }
  paint() {
    CONTEXT.fillStyle = 'black'
    CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
    CONTEXT.fillStyle = 'white'
    this.model.paint()
  }
}

export { Viewer }