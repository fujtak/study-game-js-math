import { Vector } from './Vector.js'
import { EntityLineList } from './EntityLineList.js'
import { EntityBallList } from './EntityBallList.js'
import { ActionDrag } from './ActionDrag.js'
import { SpawnerBall } from './SpawnerBall.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })

const lines = new EntityLineList()
const balls = new EntityBallList()
const drag = new ActionDrag(lines)
const spawner = new SpawnerBall(balls)

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
  lines.draw()
  balls.place()
  drag.draw()
}

window.addEventListener('load', loop)