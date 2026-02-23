import { Vector3D } from './Vector3D.js'
import { VRMLPointList } from './VRMLPointList.js'

class VRML {
  constructor({ text }) {
    if(!text) {
      console.error(`不正なVRMLの文字列: ${text}`)
      return
    }
    this.text = text
    this.points = new VRMLPointList({ list: this.#points })
    Object.freeze(this)
  }
  get #points() {
    const flat = this.#flat('point')
    const points = []
    for(let i = 0; i < flat.length; i+=3) {
      const x = flat[i]
      const y = flat[i + 1]
      const z = flat[i + 2]
      const point = new Vector3D(x, y, z)
      if(point.isEmpty) break
      points.push(point)
    }
    return points
  }
  #flat(keyword) {
    if(!this.text.includes(keyword)) {
      console.error('頂点座標の情報が見当たりません')
      return
    }
    const positionKeyword = this.text.indexOf(keyword)
    const positionStart = this.text.indexOf('[', positionKeyword)
    const positionEnd = this.text.indexOf(']', positionKeyword)
    const textArray = this.text.substring(positionStart + 1, positionEnd)
    const flat = textArray.trim()
      .split(/[\s,]+/)
      .map(string => parseFloat(string))
    return flat
  }
  paint() {
    this.points.paint()
  }
  static async forPyramid() {
    const response = await fetch('/VRMLViewer/wrl/pyramid.wrl')
    const text = await response.text()
    return new VRML({ text })
  }
}

export { VRML }