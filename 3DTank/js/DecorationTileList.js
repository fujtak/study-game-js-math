import { DecorationTile } from "./DecorationTile.js";
const tiles = [];
for (let x = -200; x < 200; x += DecorationTile.size) {
    for (let z = 0; z < 200; z += DecorationTile.size) {
        const tile = new DecorationTile(x, z);
        tiles.push(tile);
    }
}
export { tiles };
