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
    this.#balls.push(new EntityBall(x))
  }
}

export { SpawnerBall }