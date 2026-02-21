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
  
const points = await getPoints()
console.log('points:', points)