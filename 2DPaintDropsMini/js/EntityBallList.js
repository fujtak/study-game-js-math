import { EntityBall } from './EntityBall.js'

class EntityBallList {
  #balls
  constructor() {
    this.#balls = [
      new EntityBall(0),
      new EntityBall(100)
    ]
  }
  place() {
    for(let i = 0; i < this.#balls.length; ++i) {
      const ball = this.#balls[i]
      if(!ball.isOnscreen) {
        this.#balls.splice(i)
        continue
      }
      ball.place()
    }
  }
}

export { EntityBallList }