import { Point } from "./Point.js"
import { Vector } from "./Vector.js"

class EntityBall {
  constructor(x, y, velocity) {
    this.element = document.querySelector('[data-ball]')
    this.size = 40
    this.point = (y != undefined) ? new Point(x, y) : new Point(x, -this.size)
    this.speed = 1
    this.velocity = velocity ? velocity : new Vector(0, this.speed)
    Object.freeze(this)
  }
  get center() {
    const sizeHalf = this.size / 2
    return new Point(this.point.x + sizeHalf, this.point.y + sizeHalf)
  }
  get isOnscreen() {
    const left = this.point.x
    const right = this.point.x + this.size
    const top = this.point.y
    const bottom = this.point.y + this.size
    const isOnscreenX = (0 <= right && left <= CONTEXT.canvas.width)
    const isOnscreenY = (0 <= bottom && top <= CONTEXT.canvas.height)
    return isOnscreenX && isOnscreenY
  }
  get next() {
    const x = this.point.x + this.velocity.x
    const y = this.point.y + this.velocity.y
    const point = new Point(x, y)
    return new EntityBall(point.x, point.y, this.velocity)
  }
  draw() {
    CONTEXT.drawImage(this.element, this.point.x, this.point.y, this.size, this.size)
  }
}

export { EntityBall }