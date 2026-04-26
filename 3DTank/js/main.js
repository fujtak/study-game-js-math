import { CONTEXT } from "./CONTEXT.js";
import { tiles } from "./TileList.js";
import { shots } from "./ShotList.js";
function update() {
    shots.update();
}
function paint() {
    CONTEXT.fillStyle = 'black';
    CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
    tiles.paint();
    shots.paint();
}
function loop() {
    update();
    paint();
    requestAnimationFrame(loop);
}
loop();
