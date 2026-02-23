import { VRML } from './VRML.js'

function paint() {
  context.fillStyle = 'black'
  context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  context.fillStyle = 'white'
  const pointFirst = points[0]
  const distancePointFirst = Math.sqrt(pointFirst.x ** 2 + pointFirst.y ** 2)
  const distanceMax = points.reduce((prev, current) => {
    const distance = Math.sqrt(current.x ** 2 + current.y ** 2)
    return Math.max(prev, distance)
  }, distancePointFirst)
  const scaleForFitScreen = Math.min(context.canvas.width / distanceMax, context.canvas.height / distanceMax)
  for(const point of points) {
    const offsetX = context.canvas.width / 2
    const offsetY = context.canvas.height / 2
    const cameraZ = 3
    const z = point.z + cameraZ
    const x = (point.x * scaleForFitScreen / z) + offsetX
    const y = (-point.y * scaleForFitScreen / z) + offsetY // y軸を反転させる（VRMLのy軸仕様とcanvasのy軸仕様で正負が逆のため）
    const size = 6
    context.fillRect(x, y, size, size)
  }
}

const context = document.querySelector('canvas').getContext('2d')  
const pyramid = await VRML.forPyramid()
const points = pyramid.points
paint()
