import { Point } from "./Point.js"
import { Vector } from "./Vector.js"

class EntityBall {
  constructor(x, y, velocity) {
    this.element = document.querySelector('[data-ball]')
    this.size = 40
    this.point = (y != undefined) ? new Point(x, y) : new Point(x, -this.size)
    this.speed = 1
    this.maxSpeed = 1
    this.gravity = 0.005
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
    const isAccelingY = (this.velocity.y < this.maxSpeed)
    const accelY = isAccelingY ? this.gravity : 0
    const velocity = new Vector(this.velocity.x, this.velocity.y + accelY)
    const x = this.point.x + velocity.x
    const y = this.point.y + velocity.y
    return new EntityBall(x, y, velocity)
  }
  draw() {
    CONTEXT.drawImage(this.element, this.point.x, this.point.y, this.size, this.size)
  }
}

export { EntityBall }