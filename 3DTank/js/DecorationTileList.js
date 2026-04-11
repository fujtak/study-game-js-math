import { DecorationTile } from "./DecorationTile.js";
class DecorationTileList {
    _list;
    constructor() {
        this._list = [];
    }
    get list() {
        return this._list;
    }
    initialize() {
        for (let x = -200; x < 200; x += DecorationTile.size) {
            for (let z = -200; z < 200; z += DecorationTile.size) {
                const tile = new DecorationTile(x, z);
                this._list.push(tile);
            }
        }
    }
}
const tiles = new DecorationTileList();
tiles.initialize();
export { tiles };
