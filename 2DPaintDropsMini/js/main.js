import { Vector } from './Vector.js'
import { EntityBallList } from './EntityBallList.js'
import { EntityLineList } from './EntityLineList.js'
import { SpawnerBall } from './SpawnerBall.js'
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
  for(const ball of balls.balls) {
    for(const line of lines.lines) {
      const vector = Vector.forEntityLine(line)
      console.log('vector', vector)
    }
  }
  balls.place()
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)