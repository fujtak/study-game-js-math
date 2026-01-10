class EntityBallList {
  #balls
  constructor() {
    this.#balls = []
  }
  push(ball) {
    this.#balls.push(ball)
  }
  place() {
    for(let i = 0; i < this.#balls.length; ++i) {
      const ball = this.#balls[i]
      if(!ball.isOnscreen) {
        this.#balls.splice(i, 1)
        continue
      }
      ball.place()
    }
  }
}

export { EntityBallList }