class EntityLine {
  constructor({ ctx, start, end, width, color }) {
    this.ctx = ctx
    this.start = start
    this.end = end
    this.width = width ?? 1
    this.color = color ?? 'black'
    Object.freeze(this)
  }
  draw() {
    this.ctx.strokeStyle = this.color
    this.ctx.lineWidth = this.width
    this.ctx.beginPath()
    this.ctx.moveTo(this.start.x, this.start.y)
    this.ctx.lineTo(this.end.x, this.end.y)
    this.ctx.stroke()
  }
}

export { EntityLine }