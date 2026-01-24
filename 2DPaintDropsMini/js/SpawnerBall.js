import { Point } from "./Point.js"
import { EntityBall } from './EntityBall.js'

class SpawnerBall {
  #balls
  constructor(balls) {
    this.#balls = balls
    this.#initialize()
  }
  #initialize() {
    setInterval(this.#spawn.bind(this), 3000)
  }
  #spawn() {
    const x = Math.random() * CONTEXT.canvas.width
    const ball = new EntityBall(x)
    this.#balls.push(ball)
  }
}

export { SpawnerBall }