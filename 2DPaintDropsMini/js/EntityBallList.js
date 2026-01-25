class EntityBallList {
  #balls
  constructor() {
    this.#balls = []
  }
  get balls() {
    return this.#balls
  }
  #delete(index) {
    this.#balls.splice(index, 1)
  }
  push(ball) {
    this.#balls.push(ball)
  }
  replace(index, next) {
    this.#balls[index] = next
  }
  update() {
    for(let i = 0; i < this.#balls.length; ++i) {
      const current = this.#balls[i]
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