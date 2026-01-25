import { Vector } from './Vector.js'
import { EntityLine } from "./EntityLine.js"
import { EntityBall } from "./EntityBall.js"

class ColliderForLineBall {
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
    // v0: 移動後の円の中心から線の始点へのベクトル
    const v0 = new Vector(
      this.line.start.x - ballNext.center.x,
      this.line.start.y - ballNext.center.y
    )
    // v1: 移動後の円の速度
    const v1 = ballNext.velocity
    // v2: 線の始点から終点へのベクトル
    const v2 = Vector.forEntityLine(this.line)
    // c: v1とv2の外積
    const c = v1.cross(v2)
    // t1: v0とv1の外積 / t
    const t1 = v0.cross(v1) / c
    // t2: v0とv2の外積 / t
    const t2 = v0.cross(v2) / c
    // 0 <= t1 <= 1 かつ 0 <= t2 <= 1 ならば衝突
    return (0 <= t1 && t1 <= 1) && (0 <= t2 && t2 <= 1)
  }
  #reflect() {
    // incident: 入射ベクトル
    const incident = this.ball.velocity
    // tangent: 接線ベクトル
    const tangent = new Vector(
      this.line.end.x - this.line.start.x,
      this.line.end.y - this.line.start.y
    )
    // normal: 法線ベクトル
    const normal = new Vector(tangent.y, -tangent.x)
    // d: 入射ベクトルの法線成分（入射ベクトルと法線の単位ベクトルの内積）
    const d = incident.dot(normal.unit)
    // normal2d: dを2倍した法線ベクトル
    const normal2d = normal.unit.multiply(-2 * d)
    // reflection: 反射ベクトル（入射ベクトルとnormal2dの加算）
    const reflection = incident.add(normal2d)
    // ball: 反射後のボール
    const ball = new EntityBall(this.ball.point.x, this.ball.point.y, reflection)
    return ball
  }
  process() {
    if(!this.#willCollide) return
    const reflection = this.#reflect()
    return reflection
  }
}

export { ColliderForLineBall }