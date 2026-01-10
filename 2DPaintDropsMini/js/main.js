// Ball
import { EntityBallList } from './EntityBallList.js'
import { SpawnerBall } from './SpawnerBall.js'
// Line
import { EntityLineList } from './EntityLineList.js'
import { ActionDrag } from './ActionDrag.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })

const balls = new EntityBallList()
const spawner = new SpawnerBall(balls)
const lines = new EntityLineList()
const drag = new ActionDrag(lines)

function loop() {
  update()
  requestAnimationFrame(loop)
}

function update() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  balls.place()
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)