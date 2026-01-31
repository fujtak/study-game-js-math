class EntityBallList {
  #list
  constructor() {
    this.#list = []
  }
  get list() {
    return this.#list
  }
  get length() {
    return this.#list.length
  }
  #delete(index) {
    this.#list.splice(index, 1)
  }
  push(ball) {
    this.#list.push(ball)
  }
  replace(index, next) {
    this.#list[index] = next
  }
  update() {
    for(let i = 0; i < this.#list.length; ++i) {
      const current = this.#list[i]
      if(!current.isOnscreen) {
        this.#delete(i)
        continue
      }
      const next = current.next
      this.replace(i, next)
      next.draw()
    }
  }
}

export { EntityBallList }