class EntityLine {
  constructor({ start, end }) {
    this.start = start
    this.end = end
    this.width = 1
    this.color = 'black'
    Object.freeze(this)
  }
  draw() {
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.width
    ctx.beginPath()
    ctx.moveTo(this.start.x, this.start.y)
    ctx.lineTo(this.end.x, this.end.y)
    ctx.stroke()
  }
}

export { EntityLine }