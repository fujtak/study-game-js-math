const response = await fetch('/VRMLViewer/wrl/cube.wrl')
const text = await response.text()

function getArrayFromString(keyword) {
  const positionPoint = text.indexOf(keyword)
  const positionPointStart = text.indexOf('[', positionPoint)
  const positionPointEnd = text.indexOf(']', positionPoint)
  const textPoint = text.substring(positionPointStart + 1, positionPointEnd)
  const points = textPoint.trim().split(/[\s,]+/)
  return points
}

console.log('points', getArrayFromString('points'))