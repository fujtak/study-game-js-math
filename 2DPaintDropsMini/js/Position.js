class Position {
  constructor({ x, y }) {
    if(typeof x !== 'number') {
      console.error(`Invarid x: ${x}`)
      return
    }
    if(typeof y !== 'number') {
      console.error(`Invarid y: ${y}`)
      return
    }
    this.x = x
    this.y = y
    Object.freeze(this)
  }
}

export { Position }