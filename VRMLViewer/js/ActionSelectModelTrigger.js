import { Model } from './Model.js'
import { Viewer } from './Viewer.js'

class ActionSelectModelTrigger {
  constructor({ element }) {
    this.element = element
    Object.freeze(this)
  }
  async #onClick() {
    const id = this.element.dataset.triggerId
    const model = await Model.for(id)
    const viewer = new Viewer({ model })
    viewer.paint()
  }
  initialize() {
    this.element.addEventListener('click', () => this.#onClick())
  }
  emulate() {
    this.element.click()
  }
}

export { ActionSelectModelTrigger }