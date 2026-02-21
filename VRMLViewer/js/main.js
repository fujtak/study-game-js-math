import { Vector3D } from './Vector3D.js'

function getPointsFlat(text) {
  const positionKeyword = text.indexOf('points')
  const positionStart = text.indexOf('[', positionKeyword)
  const positionEnd = text.indexOf(']', positionKeyword)
  const textArray = text.substring(positionStart + 1, positionEnd)
  const flat = textArray.trim().split(/[\s,]+/)
    .map(string => parseFloat(string))
    .filter(number => Number.isInteger(number))
  return flat
}

async function getPoints() {
  const response = await fetch('/VRMLViewer/wrl/cube.wrl')
  const text = await response.text()
  const flat = getPointsFlat(text)
  const points = flat
    .filter((point, index) => (index % 3 !== 0))
    .map((point, index) => new Vector3D(flat[index], flat[index + 1], flat[index + 2]))
  return points
}

function paint() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = 'white'
  for(const point of points) {
    console.log('point', point)
    const offsetX = context.canvas.width / 2
    const offsetY = context.canvas.height / 2
    const size = 8
    const x = point.x + offsetX
    const y = point.y + offsetY
    context.fillRect(x, y, size, size)
  }
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

const context = document.querySelector('canvas').getContext('2d')  
const points = await getPoints()
loop()
