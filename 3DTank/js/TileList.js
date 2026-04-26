import { Tile } from "./Tile.js";
class TileList {
    list;
    constructor() {
        this.list = [];
    }
    initialize() {
        for (let x = -200; x < 200; x += Tile.size) {
            for (let z = -200; z < 200; z += Tile.size) {
                const tile = new Tile(x, z);
                this.list.push(tile);
            }
        }
    }
    paint() {
        for (const tile of this.list) {
            tile.paint();
        }
    }
}
const tiles = new TileList();
tiles.initialize();
export { tiles };
