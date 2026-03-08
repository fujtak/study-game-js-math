class Viewer {
  constructor({ vrml }) {
    this.vrml = vrml
    Object.freeze(this)
  }
  paint() {
    CONTEXT.fillStyle = 'black'
    CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
    CONTEXT.strokeStyle = 'white'
    this.vrml.paint()
  }
}

export { Viewer }