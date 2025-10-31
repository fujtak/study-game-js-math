import { drawLine } from './Tiny2D.js'
import { Position } from './Position.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let pos0 = { x: 0, y: 0 }
let pos1 = { x: 0, y: 0 }

function loop() {
  paint()
  requestAnimationFrame(loop)
}

function paint() {
  ctx.clearRect(0, 0, 800, 500);
  drawLine({
    ctx,
    start: new Position({ x: 100, y: 100 }),
    end: new Position({ x: 200, y: 200 }),
    width: 1,
    color: 'red',
  })
}

window.addEventListener('load', loop)