export default class Card {
        constructor(data, cardSelector, handleCardClick, popupDelete, api) {
        this._name = data.name;
        this._link = data.link;
        this._elementSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._api = api;
        this._likesId = data.likes;
        this._likes = data.likes.length;
        this._usersId = data.owner._id;
        this._myId = data.userId;
        this._popupDelete = popupDelete;
        this._elementId = data._id;
    }

    _getTemplate() {
        const cardTemplate = document.querySelector(this._elementSelector)
            .content.querySelector('.elements__item')
            .cloneNode(true);
        return cardTemplate;
    }

  /*   _like() {
        this._element.querySelector('.elements__button-like').classList.toggle('elements__button-like_active');
    } */

/*     _removeElement() {
        this._element.closest('.elements__item').remove();
    } */

    _like(evt) {
        evt.target.classList.toggle('elements__button-like_active');
    }

    _isLiked() {
        return Boolean(this._likesId.find(obj => obj._id == this._myId));
    }

    _likedCards(isLiked) {
        if (isLiked) {
            this._element.querySelector('.elements__button-like').classList.add('elements__button-like_active');
        }
    }


    _likeCard() {
        this._api.likeCard(this._elementId)
            .then(() => {
                this._likes = this._likes + 1;
                this._elementLikes.textContent = this._likes;
            })
            .catch(err => {
                console.log(err);
            })
    }

    _dislikeCard() {
        this._api.dislikeCard(this._elementId)
            .then(() => {
                this._likes = this._likes - 1;
                this._elementLikes.textContent = this._likes;
            })
            .catch(err => {
                console.log(err);
            })
    }

    generateCard() {
        this._element = this._getTemplate();
        const elementTitle = this._element.querySelector('.elements__item-title')
        .textContent = this._name;
        this._elementLikes = this._element.querySelector('.elements__likes');
        this._elementLikes.textContent = this._likes;
        this._elementImage = this._element.querySelector('.elements__item-photo')
        this._elementImage.src = this._link;
        this._elementImage.alt = `Фото ${elementTitle}`;
        this._setEventListeners();
        return this._element;
    }

    _removeDeleteButton() {
        if (this._usersId !== this._myId) {
            this._element.querySelector('.elements__item-delete-button').remove();
        }
    }

    _setEventListeners() {
        this._element.querySelector('.elements__button-like').addEventListener('click', () => {
            const likeButtonActive = this._element.querySelector('.elements__button-like')
            .classList.contains('elements__button-like_active');
            likeButtonActive ? this._dislikeCard() : this._likeCard();
        });

        this._element.querySelector('.elements__item-delete-button').addEventListener('click', () => {
            this._popupDelete({ cardId: this._elementId, card: this._element });
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick({ name: this._name, link: this._link })
        });
    }
}





