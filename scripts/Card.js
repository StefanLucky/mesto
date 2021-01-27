export class Card {
        constructor(data, cardSelector, openImagePopup) {
        this._name = data.name;
        this._link = data.link;
        this._cardSelector = cardSelector;
        this._openImagePopup = openImagePopup;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._cardSelector)
            .content.querySelector('.elements__item')
            .cloneNode(true);
        return cardTemplate;
    }

    generateCard() {
        this._element = this._getTemplate();
        const elementTitle = this._element.querySelector('.elements__item-title').textContent = this._name;
        this._cardImage = this._element.querySelector('.elements__item-photo')
        this._cardImage.src = this._link;
        this._cardImage.alt = `Фото ${elementTitle}`;
        this._setEventListeners();
        return this._element;
    }

    _doLike() {
        this._element.querySelector('.elements__button-like').classList.toggle('elements__button-like_active');
    }

    _removeElement() {
        this._element.closest('.elements__item').remove();
    }


    _setEventListeners() {
        this._element.querySelector('.elements__button-like').addEventListener('click', () => {
            this._doLike();
        });

        this._element.querySelector('.elements__item-delete-button').addEventListener('click', () => {
            this._removeElement()
        });

        this._cardImage.addEventListener('click', () => {
            this._openImagePopup({ name: this._name, link: this._link })
        });
    }
}





