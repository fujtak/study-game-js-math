import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

class EntityLineList {
  constructor() {
    this.lines = [
      new EntityLine(new Position(100, 100), new Position(300, 300)),
      new EntityLine(new Position(200, 100), new Position(400, 300)),
    ]
    Object.freeze(this)
  }
  draw() {
    for(const line of this.lines) {
      line.draw()
    }
  }
}

export { EntityLineList }