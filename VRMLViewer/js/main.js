const response = await fetch('/VRMLViewer/wrl/cube.wrl')
const text = await response.text()
console.log('text:', text)