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
    // normalBase0: ball0からball1方向の法線
    const normalBase0 = new Vector(
      this.ball1.center.x - this.ball0.center.x,
      this.ball1.center.y - this.ball0.center.y
    )
    // normalUnit0: normalBase0の単位ベクトル
    const normalUnit0 = normalBase0.unit
    // normalScalar0: ball0の法線成分の大きさ
    const normalScalar0 = normalUnit0.dot(this.ball0.velocity)
    // normal0: ball0の法線成分
    const normal0 = normalUnit0.multiply(normalScalar0)
  
    // tangentUnit0: ball0の接線の単位ベクトル
    const tangentUnit0 = normalUnit0.normal
    // tangentScalar0: ball0の法線成分の大きさ
    const tangentScalar0 = tangentUnit0.dot(this.ball0.velocity)
    // tangent0: ball0の法線成分
    const tangent0 = tangentUnit0.multiply(tangentScalar0)
   
    // normalUnit1: ball1からball0方向の法線の単位ベクトル
    const normalUnit1 = normalUnit0.multiply(-1)
    // normalScalar1: ball1の法線成分の大きさ
    const normalScalar1 = normalUnit1.dot(this.ball1.velocity)
    // normal1: ball1の法線成分
    const normal1 = normalUnit1.multiply(normalScalar1)
  
    // tangentUnit1: ball1の接線の単位ベクトル
    const tangentUnit1 = normalUnit1.normal
    // tangentScalar1: ball1の法線成分の大きさ
    const tangentScalar1 = tangentUnit1.dot(this.ball1.velocity)
    // tangent1: ball1の法線成分
    const tangent1 = tangentUnit1.multiply(tangentScalar1)

    // velocity0: 新しいball0の速度ベクトル
    const velocity0 = tangent0.add(normal1)
    // velocity1: 新しいball1の速度ベクトル
    const velocity1 = tangent1.add(normal0)
    // ball0: 新しいball0
    const ball0 = new EntityBall(this.ball0.point.x, this.ball0.point.y, velocity0)
    // ball1: 新しいball1
    const ball1 = new EntityBall(this.ball1.point.x, this.ball1.point.y, velocity1)

    return { ball0, ball1 }
  }
  process() {
    if(!this.#willCollide) return
    const balls = this.#reflect()
    return balls
  }
}

export { ColliderForBallWithBall }