import { LineStroked } from "./LineStroked.js"

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const lineStroked = new LineStroked()

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  lineStroked.draw()
}

window.addEventListener('load', loop)