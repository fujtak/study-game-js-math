"use strict";

let ctx

function paint() {
  ctx.clearRect(0, 0, 800, 500);
}

function mainloop() {
  paint()
  requestAnimationFrame(mainloop)
}

function init() {
  const canvas = document.querySelector('canvas')
  ctx = canvas.getContext('2d')
  console.log(ctx)
  mainloop()
}

window.addEventListener('load', init)