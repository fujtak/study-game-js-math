import { Position } from "./Position.js"
import { EntityLine } from "./EntityLine.js"

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const lines = [
  new EntityLine(new Position(100, 100), new Position(300, 300)),
  new EntityLine(new Position(200, 100), new Position(400, 300)),
]

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  for(const line of lines) {
    line.draw()
  }
}

window.addEventListener('load', loop)