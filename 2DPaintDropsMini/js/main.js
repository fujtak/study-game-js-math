"use strict";

function paint() {
  console.log('paint')
}

function mainloop() {
  paint()
  requestAnimationFrame(mainloop)
}

function init() {
  console.log('init')
  mainloop()
}

window.addEventListener('load', init)