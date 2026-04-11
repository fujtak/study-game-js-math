class KeyboardPressing {
    list;
    constructor() {
        this.list = new Set();
    }
    onKeydown(key) {
        this.list.add(key);
    }
    onKeyup(key) {
        this.list.delete(key);
    }
    has(key) {
        return this.list.has(key);
    }
    addEventListener() {
        window.addEventListener('keydown', e => this.onKeydown(e.key));
        window.addEventListener('keyup', e => this.onKeyup(e.key));
    }
}
const keyboardPressing = new KeyboardPressing();
keyboardPressing.addEventListener();
export { keyboardPressing };
