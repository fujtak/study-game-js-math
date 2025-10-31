import { drawLine } from './Tiny2D.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function loop() {
  paint()
  requestAnimationFrame(loop)
}

function paint() {
  ctx.clearRect(0, 0, 800, 500);
  drawLine({ ctx, x0: 100, y0: 100, x1: 200, y1: 200, width: 1, color: 'red' })
}

window.addEventListener('load', loop)