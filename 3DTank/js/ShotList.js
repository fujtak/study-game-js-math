import { Shot } from "./Shot.js";
import { keyboardPressing } from "./KeyboardPressing.js";
class ShotList {
    frame;
    list;
    constructor() {
        this.frame = 0;
        this.list = [];
    }
    add() {
        const spacekey = ' ';
        if (!keyboardPressing.has(spacekey))
            return;
        const interval = 32;
        if (this.frame % interval > 0)
            return;
        this.list.push(new Shot());
    }
    delete() {
        for (let i = 0; i < this.list.length; ++i) {
            const isFar = this.list[i].z > 1000;
            if (!isFar)
                continue;
            this.list.splice(i, 1);
        }
    }
    update() {
        this.frame++;
        this.delete();
        for (let i = 0; i < this.list.length; ++i) {
            this.list[i] = this.list[i].update();
        }
        this.add();
    }
    paint() {
        for (const shot of this.list) {
            shot.paint();
        }
    }
}
export const shots = new ShotList();
