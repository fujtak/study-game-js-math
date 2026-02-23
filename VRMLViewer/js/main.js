import { VRML } from './VRML.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

function paint(model) {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = 'white'
  model.paint()
}

const triggers = document.querySelectorAll('[data-trigger]')
Array.from(triggers).map(trigger => {
  trigger.addEventListener('click', async() => {
    const id = trigger.dataset.trigger
    const model = await VRML.for(id)
    paint(model)
  })
})
triggers[0].click()
