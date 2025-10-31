import { EntityLine } from './EntityLine.js'

class EntityLineStroked {
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
    return new EntityLineStroked({
      start: this.start,
      end: end,
    })
  }
  draw() {
    const line = new EntityLine({ start: this.start, end: this.end })
    line.draw()
  }
}

export { EntityLineStroked }