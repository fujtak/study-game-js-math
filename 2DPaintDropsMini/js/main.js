// Ball
import { EntityBallList } from './EntityBallList.js'
import { SpawnerBall } from './SpawnerBall.js'
// Line
import { EntityLineList } from './EntityLineList.js'
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
      console.log('🟢ball', ball, 'x', '✏️line', line)
    }
  }
  draw()
}

function draw() {
  lines.draw()
  drag.draw()
}

window.addEventListener('load', loop)