class ColorPalette {
  #element
  #color
  constructor() {
    this.#element = document.querySelector('[data-palette]')
    this.#color = 'black'
    this.#addClickEventListener()
  }
  get color() {
    return this.#color
  }
  #addClickEventListener() {
    this.#element.addEventListener('click', (e) => {
      this.#color = e.target.dataset.color
    })
  }
}

export { ColorPalette }