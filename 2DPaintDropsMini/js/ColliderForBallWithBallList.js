import { EntityBallList } from "./EntityBallList.js"
import { ColliderForBallWithBall } from "./ColliderForBallWithBall.js"

class ColliderForBallWithBallList {
  constructor(balls) {
    if(!balls instanceof EntityBallList) return
    this.balls = balls
    Object.freeze(this)
  }
  update() {
    if(this.balls.length <= 1) return
    for(let i0 = 0; i0 < this.balls.list.length; ++i0) {
      const ball0 = this.balls.list[i0]
      for(let i1 = 0; i1 < this.balls.list.length; ++i1) {
        const ball1 = this.balls.list[i1]
        if(ball0 === ball1) continue
        const colider = new ColliderForBallWithBall(ball0, ball1)
        const result = colider.process()
        if(!result) continue
        this.balls.replace(i0, result.ball0)
        this.balls.replace(i1, result.ball1)
      }
    }
  }
}

export { ColliderForBallWithBallList }