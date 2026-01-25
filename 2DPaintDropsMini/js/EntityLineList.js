class EntityLineList {
  #list
  constructor() {
    this.#list = []
  }
  get list() {
    return this.#list
  }
  push(line) {
    this.#list.push(line)
  }
  draw() {
    for(const line of this.#list) {
      line.draw()
    }
  }
}

export { EntityLineList }