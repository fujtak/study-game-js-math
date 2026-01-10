import { EntityBall } from './EntityBall.js'

class EntityBallList {
  #balls
  constructor() {
    this.#balls = [
      new EntityBall(0),
      new EntityBall(100)
    ]
  }
  draw() {
    for(const ball of this.#balls) {
      ball.draw()
    }
  }
}

export { EntityBallList }