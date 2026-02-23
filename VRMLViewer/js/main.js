import { Model } from './Model.js'
import { Viewer } from './Viewer.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

const triggers = document.querySelectorAll('[data-trigger]')
Array.from(triggers).map(trigger => {
  trigger.addEventListener('click', async() => {
    const id = trigger.dataset.trigger
    const model = await Model.for(id)
    const viewer = new Viewer({ model })
    viewer.paint()
  })
})
triggers[0].click()
