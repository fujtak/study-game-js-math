import { Vector } from './Vector.js'
import { EntityBallList } from './EntityBallList.js'
import { EntityLineList } from './EntityLineList.js'
import { SpawnerBall } from './SpawnerBall.js'
import { ActionDrag } from './ActionDrag.js'

const context = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: context })

const balls = new EntityBallList()
new SpawnerBall(balls)
const lines = new EntityLineList()
const drag = new ActionDrag(lines)

function loop() {
  update()
  requestAnimationFrame(loop)
}

function update() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  balls.place()
  for(const ball of balls.balls) {
    for(const line of lines.lines) {
      const vectorX = line.end.x - line.start.x
      const vectorY = line.end.y - line.start.y
      const vector = new Vector(vectorX, vectorY)
      console.log('vector', vector)
    }
  }
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)