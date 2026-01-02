class EntityBall {
  constructor() {
    this.element = document.querySelector('[data-ball]')
    Object.freeze(this)
  }
  draw() {
    CONTEXT.drawImage(this.element, 0, 0, 100, 100)
  }
}

export { EntityBall }