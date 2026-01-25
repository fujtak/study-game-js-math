import { EntityLineList } from "./EntityLineList.js"
import { EntityBallList } from "./EntityBallList.js"
import { ColliderForLineWithBall } from './ColliderForLineWithBall.js'

class ColliderForLineWithBallList {
  constructor(lines, balls) {
    if(!lines instanceof EntityLineList) return
    if(!balls instanceof EntityBallList) return
    this.lines = lines
    this.balls = balls
    Object.freeze(this)
  }
  update() {
    for(const line of this.lines.list) {
      for(let i = 0; i < this.balls.list.length; ++i) {
        const ball = this.balls.list[i]
        const collider = new ColliderForLineWithBall(line, ball)
        const result = collider.process()
        if(!result) continue
        this.balls.replace(i, result)
      }
    }
  }
}

export { ColliderForLineWithBallList }