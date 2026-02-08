function getArrayFromString(keyword) {
  const positionPoint = text.indexOf(keyword)
  const positionPointStart = text.indexOf('[', positionPoint)
  const positionPointEnd = text.indexOf(']', positionPoint)
  const textPoint = text.substring(positionPointStart + 1, positionPointEnd)
  const points = textPoint.trim().split(/[\s,]+/)
    .map(string => parseFloat(string))
    .map(number => Number.isInteger(number) ? number : console.error(`Invalid number: ${number}`))
    .filter(number => Number.isInteger(number))
  return points
}

const response = await fetch('/VRMLViewer/wrl/cube.wrl')
const text = await response.text()
const points = getArrayFromString('points')