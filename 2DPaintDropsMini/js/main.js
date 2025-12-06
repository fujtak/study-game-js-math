import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"
import { EntityLineList } from './EntityLineList.js'

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const lines = new EntityLineList()
setTimeout(() => {
  const line = new EntityLine(new Position(300, 100), new Position(500, 300))
  lines.push(line)
}, 3000)

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  lines.draw()
}

window.addEventListener('load', loop)