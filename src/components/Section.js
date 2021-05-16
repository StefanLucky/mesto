export default class Section {
    constructor({ render }, containerSelector) {
        this._render = render;
        this._container = containerSelector;
    }
    renderElements(arr) {
        arr.forEach(item => this._render(item));
    }
    addElements(card, before = false) {
       if (before) {this._container.prepend(card);
        }
        else
        this._container.append(card);
     }
}