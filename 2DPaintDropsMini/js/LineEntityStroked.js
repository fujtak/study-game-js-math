import { LineEntity } from './LineEntity.js'

// 始点を保持できるLineEntity
class LineEntityStroked {
  constructor({ start, end }) {
    if(!start) {
      console.error(`Invarid start: ${start}`)
      return
    }
    this.start = start
    this.end = end ?? start
    Object.freeze(this)
  }
  update(end) {
    return new LineEntityStroked({
      start: this.start,
      end: end,
    })
  }
  draw() {
    const line = new LineEntity({ start: this.start, end: this.end })
    line.draw()
  }
}

export { LineEntityStroked }