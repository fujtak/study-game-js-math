import { EntityLineList } from './EntityLineList.js'
import { EntityBallList } from './EntityBallList.js'
import { ActionDrag } from './ActionDrag.js'
import { SpawnerBall } from './SpawnerBall.js'
import { ColliderForLineWithBallList } from './ColliderForLineWithBallList.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })
Object.defineProperty(window, "GRAVITY", { value: 0.005 })

const lines = new EntityLineList()
const balls = new EntityBallList()
const drag = new ActionDrag(lines)
const spawner = new SpawnerBall(balls)
const colider = new ColliderForLineWithBallList(lines, balls)

function loop() {
  update()
  requestAnimationFrame(loop)
}

function update() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  colider.update()
  balls.update()
  drag.update()
  lines.draw()
}

window.addEventListener('load', loop)