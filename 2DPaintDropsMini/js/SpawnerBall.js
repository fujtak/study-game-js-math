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
    this.#balls.push(new EntityBall(0))
  }
}

export { SpawnerBall }