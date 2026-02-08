import { Vector3D } from './Vector3D.js'

function getIntegersFromString(keyword) {
  const positionKeyword = text.indexOf(keyword)
  const positionStart = text.indexOf('[', positionKeyword)
  const positionEnd = text.indexOf(']', positionKeyword)
  const textArray = text.substring(positionStart + 1, positionEnd)
  const integers = textArray.trim().split(/[\s,]+/)
    .map(string => parseFloat(string))
    .filter(number => Number.isInteger(number))
  return integers
}

const response = await fetch('/VRMLViewer/wrl/cube.wrl')
const text = await response.text()
const points = getIntegersFromString('points')
const vertices = points
  .filter((point, index) => (index % 3 !== 0))
  .map((point, index) => new Vector3D(points[index], points[index + 1], points[index + 2]))
console.log('vertices:', vertices)