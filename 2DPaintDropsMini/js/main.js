import { Position } from './Position.js'
import { EntityLine } from './EntityLine.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

function loop() {
  paint()
  requestAnimationFrame(loop)
}

function paint() {
  ctx.clearRect(0, 0, 800, 500)
  const line = new EntityLine({ ctx: ctx, start: new Position({ x: 100, y: 100 }), end: new Position({ x: 200, y: 200 })})
  line.draw()
}

window.addEventListener('load', loop)