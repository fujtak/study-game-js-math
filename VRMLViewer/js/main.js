import { ActionSelectModel } from './ActionSelectModel.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

const action = new ActionSelectModel()
action.initialize()
