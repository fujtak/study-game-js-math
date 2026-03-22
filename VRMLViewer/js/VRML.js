import { Vector } from './Vector.js'
import { ModelPoints } from './ModelPoints.js'

export class VRML {
  constructor({ text }) {
    if(!text) {
      console.error(`不正なVRMLの文字列: ${text}`)
      return
    }
    this.text = text
    this.model = new ModelPoints({ points: this.#points, path: this.#path })
    Object.freeze(this)
  }
  get #points() {
    const flat = this.#flat('point')
    const points = []
    for(let i = 0; i < flat.length; i+=3) {
      const x = flat[i]
      const y = flat[i + 1]
      const z = flat[i + 2]
      const point = new Vector(x, y, z)
      if(point.isEmpty) break
      points.push(point)
    }
    return points
  }
  get #path() {
    const flat = this.#flat('coordIndex')
    const path = flat
      .reduce((index, current) => {
        const isSeparator = current === -1
        isSeparator ? index.push([]) : index.at(-1).push(current)
        return index
      }, [[]])
      .filter(index => index.length > 0)
    return path
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
  static async forBanana() {
    const response = await fetch('/study-game-js-math/VRMLViewer/wrl/fruit-banana.wrl')
    const text = await response.text()
    return new VRML({ text })
  }
}