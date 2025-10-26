"use strict";

let ctx

function init() {
  const canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  loop()
}

function loop() {
  paint()
  requestAnimationFrame(loop)
}

function paint() {
  ctx.clearRect(0, 0, 800, 500);
  drawLine({x0: 100, y0: 100, x1: 200, y1: 200, width: 1, color: 'red'})
}

window.addEventListener('load', init)