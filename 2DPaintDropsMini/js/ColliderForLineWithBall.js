import { Point } from './Point.js'
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
    // v0: 線分の始点から円の中心へのベクトル
    const v0 = new Vector(
      ballNext.center.x - this.line.start.x,
      ballNext.center.y - this.line.start.y
    )
    // v1: 線分ベクトル
    const v1 = Vector.forEntityLine(this.line)
    // d0: 線分の始点から線分における円との最近点（円の中心から線分に下ろした垂線と線分の交点）までの距離
    // 数式) 直角三角形の底辺 = cosθ*斜辺 = cosθ|v0->| = v0・v1 / |v1->| = (x1*x2+y1*y2) / |v1->|
    const d0 = v0.dot(v1) / v1.length
    // ratio: 線分に対するd0の割合
    const radio = Math.max(0, Math.min(1, d0 / v1.length))
    // h: 線分における円との最近点（円の中心から線分に下ろした垂線と線分の交点）
    const h = new Point(
      this.line.start.x + (radio * v1.x),
      this.line.start.y + (radio * v1.y)
    )
    // d1: 線分と円の中心の間の距離
    const d1x = ballNext.center.x - h.x
    const d1y = ballNext.center.y - h.y
    const d1 = Math.sqrt(d1x**2 + d1y**2)
    return d1 <= ballNext.radius
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