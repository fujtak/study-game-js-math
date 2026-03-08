import { VRML } from './VRML.js'
import { Viewer } from './Viewer.js'

class ActionSelectModelTrigger {
  constructor({ element }) {
    this.element = element
    Object.freeze(this)
  }
  async #onClick() {
    const id = this.element.dataset.triggerId
    const vrml = await VRML.for(id)
    const model = vrml.model
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