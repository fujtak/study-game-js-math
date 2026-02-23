import { VRML } from './VRML.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

const pyramid = await VRML.forPyramid()

function paint() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = 'white'
  pyramid.paint()
}

paint()
