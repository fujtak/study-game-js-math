import { LineStrokedList } from "./LineStrokedList.js"

const ctx = document.querySelector('canvas').getContext('2d')
Object.defineProperty(window, "CONTEXT", { value: ctx })

const lineStrokedList = new LineStrokedList()

function loop() {
  draw()
  requestAnimationFrame(loop)
}

function draw() {
  CONTEXT.clearRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height)
  lineStrokedList.draw()
}

window.addEventListener('load', loop)