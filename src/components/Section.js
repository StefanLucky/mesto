export default class Section {
    constructor({ items, render }, containerSelector) {
        this._items = items;
        this._render = render;
        this._container = containerSelector;
    }
    renderElements() {
        this._items.forEach(item => this._render(item));
    }
    addElements(card) {
        this._container.append(card);
    }
    addOneElement(card) {
        this._container.prepend(card);
    }
}