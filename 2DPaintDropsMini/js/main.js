import { MouseStrokeLine } from "./MouseStrokeLine.js"

const ctx = document.querySelector('canvas').getContext('2d')
window.ctx = ctx

const mouseStrokeLine = new MouseStrokeLine()

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  mouseStrokeLine.draw()
}

window.addEventListener('load', loop)