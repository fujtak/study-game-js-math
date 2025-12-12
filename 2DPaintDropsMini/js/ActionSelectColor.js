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
  #addEventListener() {
    this.#parent.addEventListener('click', (e) => {
      const img = e.target
      const src = img.getAttribute('src')
      const color = src.split(/[\/\-.]/).at(-2)
      this.#color = color
    })
  }
}

const colorSelector = new ActionSelectColor()

export { colorSelector }