import { ListLineStroked } from "./ListLineStroked.js"

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const listLineStroked = new ListLineStroked()

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  listLineStroked.draw()
}

window.addEventListener('load', loop)