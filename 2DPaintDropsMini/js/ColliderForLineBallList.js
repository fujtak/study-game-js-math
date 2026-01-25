import { EntityLineList } from "./EntityLineList.js"
import { EntityBallList } from "./EntityBallList.js"
import { ColliderForLineBall } from './ColliderForLineBall.js'

class ColliderForLineBallList {
  constructor(lines, balls) {
    if(!lines instanceof EntityLineList) return
    if(!balls instanceof EntityBallList) return
    this.lines = lines
    this.balls = balls
    Object.freeze(this)
  }
  update() {
    for(const line of this.lines.lines) {
      for(let i = 0; i < this.balls.balls.length; ++i) {
        const ball = this.balls.balls[i]
        const colider = new ColliderForLineBall(line, ball)
        if(colider.willCollide) {
          const reflection = colider.reflect()
          console.log('💥reflection', reflection)
          this.balls.replace(i, reflection)
        }
      }
    }
  }
}

export { ColliderForLineBallList }