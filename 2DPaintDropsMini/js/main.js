import { EntityLineList } from './EntityLineList.js'
import { ActionLine } from './ActionLine.js'

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const lines = new EntityLineList()
const actionLine = new ActionLine(lines)

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  lines.draw()
  actionLine.draw()
}

window.addEventListener('load', loop)