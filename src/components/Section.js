export default class Section {
    constructor({ render }, containerSelector) {
        this._render = render;
        this._container = containerSelector;
    }
    renderElements(arr) {
        arr.forEach(item => this._render(item));
    }
    addElements(card) {
        this._container.append(card);
    }
    addOneElement(card) {
        this._container.prepend(card);
    }
}