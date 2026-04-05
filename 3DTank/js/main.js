import { CONTEXT } from "./CONTEXT.js";
import { tiles } from "./DecorationTileList.js";
function paint() {
    CONTEXT.fillStyle = 'black';
    CONTEXT.fillRect(0, 0, CONTEXT.canvas.width, CONTEXT.canvas.height);
    for (const tile of tiles) {
        tile.paint();
    }
}
function loop() {
    paint();
    requestAnimationFrame(loop);
}
loop();
