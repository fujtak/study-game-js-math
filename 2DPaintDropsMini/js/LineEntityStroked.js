import { LineEntity } from './LineEntity.js'

// 始点を保持できるLineEntity
class LineEntityStroked {
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
    return new LineEntityStroked({
      start: this.start,
      end: end,
      color: this.color,
    })
  }
  draw() {
    const line = new LineEntity({ start: this.start, end: this.end, color: this.color })
    line.draw()
  }
}

export { LineEntityStroked }