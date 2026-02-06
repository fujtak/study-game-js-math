class ObserverResize {
  constructor() {
    this.#initialize()
  }
  #initialize() {
    this.#fullscreen()
    this.#addEventListener()
  }
  #fullscreen() {
    CONTEXT.canvas.width = window.innerWidth
    CONTEXT.canvas.height = window.innerHeight
  }
  #addEventListener() {
    window.addEventListener('resize', () => this.#fullscreen())
  }
}

export { ObserverResize }