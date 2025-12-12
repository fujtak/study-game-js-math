class EntityLineList {
  #lines
  constructor() {
    this.#lines = []
  }
  push(line) {
    this.#lines.push(line)
  }
  draw() {
    for(const line of this.#lines) {
      line.draw()
    }
  }
}

export { EntityLineList }