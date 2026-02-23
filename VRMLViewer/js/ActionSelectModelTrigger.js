import { Model } from './Model.js'
import { Viewer } from './Viewer.js'

class ActionSelectModelTrigger {
  constructor({ element }) {
    this.element = element
    Object.freeze(this)
  }
  async #paint() {
    const id = this.element.dataset.triggerId
    const model = await Model.for(id)
    const viewer = new Viewer({ model })
    viewer.paint()
  }
  initialize() {
    this.element.addEventListener('click', () => this.#paint())
  }
  emulate() {
    this.element.click()
  }
}

export { ActionSelectModelTrigger }