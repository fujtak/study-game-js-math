import { Vector } from './Vector.js'
import { EntityBall } from "./EntityBall.js"

class ColliderForBallWithBall {
  constructor(ball0, ball1) {
    if(!ball0 instanceof EntityBall) return
    if(!ball1 instanceof EntityBall) return
    this.ball0 = ball0
    this.ball1 = ball1
    Object.freeze(this)
  }
  get #willCollide() {
    // ball0Next: 移動後のball0（シミュレート用）
    const ball0Next = this.ball0.next
    // ball1Next: 移動後のball1（シミュレート用）
    const ball1Next = this.ball1.next
    // d: 各ボールの中心間の距離
    const dx = ball0Next.center.x - ball1Next.center.x
    const dy = ball0Next.center.y - ball1Next.center.y
    const d = Math.sqrt(dx**2 + dy**2)
    // sr: 各ボールの半径の和
    const sr = ball0Next.radius + ball1Next.radius
    return d <= sr
  }
  #reflect() {
    // reflectionBall0: 反射ベクトル
    const reflectionBall0 = new Vector(this.ball0.velocity.x, this.ball0.velocity.y)
    // ball0: 反射後のball0
    const ball0 = new EntityBall(this.ball0.point.x, this.ball0.point.y, reflectionBall0)
    // reflectionBall1: 反射ベクトル
    const reflectionBall1 = new Vector(this.ball1.velocity.x, this.ball1.velocity.y)
    // ball1: 反射後のball1
    const ball1 = new EntityBall(this.ball0.point.x, this.ball0.point.y, reflectionBall1)
    return {
      ball0,
      ball1
    }
  }
  process() {
    if(!this.#willCollide) return
    const balls = this.#reflect()
    return balls
  }
}

export { ColliderForBallWithBall }