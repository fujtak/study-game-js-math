class EntityLineList {
  constructor() {
    this.lines = []
    Object.freeze(this)
  }
  push(line) {
    this.lines.push(line)
  }
  draw() {
    for(const line of this.lines) {
      line.draw()
    }
  }
}

export { EntityLineList }