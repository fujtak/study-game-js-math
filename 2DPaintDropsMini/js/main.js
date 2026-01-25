import { EntityLineList } from './EntityLineList.js'
import { EntityBallList } from './EntityBallList.js'
import { ActionDrag } from './ActionDrag.js'
import { SpawnerBall } from './SpawnerBall.js'
import { ColliderForLineBallList } from './ColliderForLineBallList.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })

const lines = new EntityLineList()
const balls = new EntityBallList()
const drag = new ActionDrag(lines)
const spawner = new SpawnerBall(balls)
const colider = new ColliderForLineBallList(lines, balls)

function loop() {
  update()
  requestAnimationFrame(loop)
}

function update() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  colider.update()
  balls.update()
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)