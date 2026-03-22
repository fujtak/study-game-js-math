import { VRML } from './VRML.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

const vrml = await VRML.for('fruit-banana')
const model = vrml.model

function paint() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.strokeStyle = 'white'
  model.paint()
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

loop()
