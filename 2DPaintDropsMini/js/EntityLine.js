class EntityLine {
  constructor(start, end, color) {
    this.start = start
    this.end = end
    this.width = 1
    console.log('color', color)
    this.color = color ?? 'black'
    Object.freeze(this)
  }
  draw() {
    CONTEXT.strokeStyle = this.color
    CONTEXT.lineWidth = this.width
    CONTEXT.beginPath()
    CONTEXT.moveTo(this.start.x, this.start.y)
    CONTEXT.lineTo(this.end.x, this.end.y)
    CONTEXT.stroke()
  }
}

export { EntityLine }