import { Vector } from './Vector.js'
import { ModelPointList } from './ModelPointList.js'

class VRML {
  constructor({ text }) {
    if(!text) {
      console.error(`不正なVRMLの文字列: ${text}`)
      return
    }
    this.text = text
    this.model = new ModelPointList({ pointList: this.#pointList, pathList: this.#pathList })
    Object.freeze(this)
  }
  get #pointList() {
    const flat = this.#flat('point')
    const pointList = []
    for(let i = 0; i < flat.length; i+=3) {
      const x = flat[i]
      const y = flat[i + 1]
      const z = flat[i + 2]
      const point = new Vector(x, y, z)
      if(point.isEmpty) break
      pointList.push(point)
    }
    return pointList
  }
  get #pathList() {
    const flat = this.#flat('coordIndex')
    const pathList = flat
      .reduce((path, current) => {
        const isSeparator = current === -1
        isSeparator ? path.push([]) : path.at(-1).push(current)
        return path
      }, [[]])
      .filter(path => path.length > 0)
    console.log('pathList', pathList)
    return pathList
  }
  #flat(keyword) {
    if(!this.text.includes(keyword)) {
      console.error(`${keyword} の情報が見当たりません`)
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
    this.model.paint()
  }
  static async for(id) {
    const response = await fetch(`/study-game-js-math/VRMLViewer/wrl/${id}.wrl`)
    const text = await response.text()
    return new VRML({ text })
  }
}

export { VRML }