import { VRML } from './VRML.js'
import { Viewer } from './Viewer.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, 'CONTEXT', { value: context })

const vrml = await VRML.forBanana()
const viewer = new Viewer({ model: vrml.model })

function loop() {
  viewer.paint()
  requestAnimationFrame(loop)
}

loop()
