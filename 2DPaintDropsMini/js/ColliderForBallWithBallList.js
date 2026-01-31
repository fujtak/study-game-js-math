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
    for(const ball0 of this.balls.list) {
      for(const ball1 of this.balls.list) {
        if(ball0 === ball1) continue
        const collider = new ColliderForBallWithBall(ball0, ball1)
        console.log('willCollide', collider.willCollide)
      }
    }
  }
}

export { ColliderForBallWithBallList }