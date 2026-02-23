import { ActionSelectModelTrigger } from './ActionSelectModelTrigger.js'

class ActionSelectModel {
  constructor() {
    this.triggers = Array
      .from(document.querySelectorAll('[data-trigger-id]'))
      .map(element => new ActionSelectModelTrigger({ element }))
    Object.freeze(this)
  }
  initialize() {
    this.triggers.map(trigger => trigger.initialize())
    this.triggers[0].emulate()
  }
}

export { ActionSelectModel }