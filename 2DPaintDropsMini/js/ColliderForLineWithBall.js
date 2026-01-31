import { Vector } from './Vector.js'
import { EntityLine } from "./EntityLine.js"
import { EntityBall } from "./EntityBall.js"

class ColliderForLineWithBall {
  constructor(line, ball) {
    if(!line instanceof EntityLine) return
    if(!ball instanceof EntityBall) return
    this.line = line
    this.ball = ball
    Object.freeze(this)
  }
  get #willCollide() {
    // ballNext: 移動後の円（シミュレート用）
    const ballNext = this.ball.next
  }
  #reflect() {
    // incident: 入射ベクトル
    const incident = this.ball.velocity
    // tangent: 接線ベクトル
    const tangent = new Vector(
      this.line.end.x - this.line.start.x,
      this.line.end.y - this.line.start.y
    )
    // d: 入射ベクトルの法線成分（入射ベクトルと法線の単位ベクトルの内積）
    const d = incident.dot(tangent.normal.unit)
    // normal2d: dを-2倍した法線ベクトル
    const normal2d = tangent.normal.unit.multiply(-2 * d)
    // reflection: 反射ベクトル（入射ベクトルとnormal2dの加算）
    const reflection = incident.add(normal2d)
    // ball: 反射後のボール
    const ball = new EntityBall(this.ball.point.x, this.ball.point.y, reflection)
    return ball
  }
  process() {
    if(!this.#willCollide) return
    const ball = this.#reflect()
    return ball
  }
}

export { ColliderForLineWithBall }