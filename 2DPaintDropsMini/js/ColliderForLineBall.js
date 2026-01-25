import { Vector } from './Vector.js'
import { EntityLine } from "./EntityLine.js"
import { EntityBall } from "./EntityBall.js"

class ColliderForLineBall {
  #line
  #ball
  constructor(line, ball) {
    if(!line instanceof EntityLine) return
    if(!ball instanceof EntityBall) return
    this.#line = line
    this.#ball = ball
  }
  get willCollide() {
    // ballNext: 移動後の円（シミュレート用）
    const ballNext = this.#ball.next
    // v0: 移動後の円の中心から線の始点へのベクトル
    const v0 = new Vector(
      this.#line.start.x - ballNext.center.x,
      this.#line.start.y - ballNext.center.y
    )
    // v1: 移動後の円の速度
    const v1 = this.#ball.velocity
    // v2: 線の始点から終点へのベクトル
    const v2 = Vector.forEntityLine(this.#line)
    // c: v1とv2の外積
    const c = v1.cross(v2)
    // t1: v0とv1の外積 / t
    const t1 = v0.cross(v1) / c
    // t2: v0とv2の外積 / t
    const t2 = v0.cross(v2) / c
    // 0 <= t1 <= 1 かつ 0 <= t2 <= 1 ならば衝突
    return (0 <= t1 && t1 <= 1) && (0 <= t2 && t2 <= 1)
  }
}

export { ColliderForLineBall }