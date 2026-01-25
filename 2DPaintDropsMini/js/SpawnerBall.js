import { EntityBall } from './EntityBall.js'

class SpawnerBall {
  constructor(balls) {
    this.balls = balls
    this.#initialize()
    Object.freeze(this)
  }
  #initialize() {
    setInterval(this.#spawn.bind(this), 3000)
  }
  #spawn() {
    const x = Math.random() * CONTEXT.canvas.width
    const ball = new EntityBall(x)
    this.balls.push(ball)
  }
}

export { SpawnerBall }