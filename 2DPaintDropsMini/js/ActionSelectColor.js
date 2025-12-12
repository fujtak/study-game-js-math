class ActionSelectColor {
  #parent
  #color
  constructor() {
    this.#parent = document.querySelector('[data-palette]')
    this.#color = undefined
    this.#addEventListener()
  }
  get color() {
    return this.#color
  }
  #select(img) {
    if(!img || !img instanceof HTMLImageElement) return
    const src = img.getAttribute('src')
    const color = src.split(/[\/\-.]/).at(-2)
    this.#color = color
  }
  #addEventListener() {
    this.#parent.addEventListener('click', (e) => this.#select(e.target))
  }
}

const colorSelector = new ActionSelectColor()

export { colorSelector }