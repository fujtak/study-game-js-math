import { EntityLine } from './EntityLine.js'

// 始点を保持できるEntityLine
class EntityLineStroked {
  constructor({ start, end, color }) {
    if(!start) {
      console.error(`Invarid start: ${start}`)
      return
    }
    this.start = start
    this.end = end ?? start
    this.color = color
    Object.freeze(this)
  }
  update(end) {
    return new EntityLineStroked({
      start: this.start,
      end: end,
      color: this.color,
    })
  }
  draw() {
    const line = new EntityLine({ start: this.start, end: this.end, color: this.color })
    line.draw()
  }
}

export { EntityLineStroked }