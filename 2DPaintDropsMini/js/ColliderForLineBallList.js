import { EntityLineList } from "./EntityLineList.js"
import { EntityBallList } from "./EntityBallList.js"
import { ColliderForLineBall } from './ColliderForLineBall.js'

class ColliderForLineBallList {
  #lines
  #balls
  constructor(lines, balls) {
    if(!lines instanceof EntityLineList) return
    if(!balls instanceof EntityBallList) return
    this.#lines = lines
    this.#balls = balls
  }
  update() {
    for(const ball of this.#balls.balls) {
      for(const line of this.#lines.lines) {
        const colider = new ColliderForLineBall(line, ball)
        if(colider.isColliding) console.log('💥衝突！')
      }
    }
  }
}

export { ColliderForLineBallList }