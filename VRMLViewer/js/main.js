import { Vector3D } from './Vector3D.js'

function getPointsFlat(text) {
  if(!text.includes('point')) {
    console.error('頂点座標の情報が見当たりません')
    return
  }
  const positionKeyword = text.indexOf('point')
  const positionStart = text.indexOf('[', positionKeyword)
  const positionEnd = text.indexOf(']', positionKeyword)
  const textArray = text.substring(positionStart + 1, positionEnd)
  const flat = textArray.trim()
    .split(/[\s,]+/)
    .map(string => parseFloat(string))
  return flat
}

async function getPoints() {
  const response = await fetch('/VRMLViewer/wrl/triangular-pyramid.wrl')
  const text = await response.text()
  const flat = getPointsFlat(text)
  const points = []
  for(let i = 0; i < flat.length; i+=3) {
    const x = flat[i]
    const y = flat[i + 1]
    const z = flat[i + 2]
    const vector = new Vector3D(x, y, z)
    if(vector.isEmpty) break
    points.push(vector)
  }
  return points
}

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
const points = await getPoints()
paint()
