import { EntityBall } from './EntityBall.js'
import { EntityLineList } from './EntityLineList.js'
import { ActionDrag } from './ActionDrag.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })

const ball = new EntityBall()
const lines = new EntityLineList()
const drag = new ActionDrag(lines)

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  ball.draw()
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)