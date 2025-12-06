import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  const start = new Position(100, 100)
  const end = new Position(300, 300)
  const line = new EntityLine(start, end)
  line.draw()
}

window.addEventListener('load', loop)