export class Matrix {
    list;
    constructor(list) {
        this.list = list;
    }
    static forRotateHorizontal(degree) {
        const theta = degree * Math.PI / 180;
        const s = Math.sin(theta);
        const c = Math.cos(theta);
        return [c, 0, s, 0, 1, 0, -s, 0, c];
    }
}
