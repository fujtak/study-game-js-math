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
  const line = new EntityLine(new Position(100, 100), new Position(300, 300))
  line.draw()
  const line2 = new EntityLine(new Position(200, 100), new Position(400, 300))
  line2.draw()
}

window.addEventListener('load', loop)