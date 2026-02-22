import { Vector3D } from './Vector3D.js'

function getPointsFlat(text) {
  if(!text.includes('points')) {
    console.error('頂点座標の情報が見当たりません')
    return
  }
  const positionKeyword = text.indexOf('points')
  const positionStart = text.indexOf('[', positionKeyword)
  const positionEnd = text.indexOf(']', positionKeyword)
  const textArray = text.substring(positionStart + 1, positionEnd)
  const flat = textArray.trim().split(/[\s,]+/)
    .map(string => parseFloat(string))
  return flat
}

async function getPoints() {
  const response = await fetch('/VRMLViewer/wrl/teapot.wrl')
  const text = await response.text()
  const flat = getPointsFlat(text)
  const points = flat
    .filter((point, index) => {
      const isPointUnit = (index % 3 === 0)
      return isPointUnit
    })
    .map((point, index) => {
      const x = flat[index]
      const y = flat[index + 1]
      const z = flat[index + 2]
      return new Vector3D(x, y, z)
    })
  return points
}

function paint() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = 'white'
  for(const point of points) {
    const offsetX = context.canvas.width / 2
    const offsetY = context.canvas.height / 2
    const x = (point.x) + offsetX
    const y = (point.y) + offsetY
    const size = 8
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
