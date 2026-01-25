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
    for(const ball of this.balls.balls) {
      for(const line of this.lines.lines) {
        const colider = new ColliderForLineBall(line, ball)
        if(colider.willCollide) console.log('💥次のフレームで衝突！')
      }
    }
  }
}

export { ColliderForLineBallList }