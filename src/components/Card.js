export default class Card {
        constructor(data, cardSelector, handleCardClick, handleDeletePopup, api) {
        this._name = data.name;
        this._link = data.link;
        this._elementSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._api = api;
        this._likesId = data.likes;
        this._likes = data.likes.length;
        this._usersId = data.owner._id;
        this._myId = data.userId;
        this._handleDeletePopup = handleDeletePopup;
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

    _updateLikes() {
        this._elementLikes.textContent = this._likesId.length;
        if(this._isLiked()){
            this._elementLike.classList.add('elements__button-like_active');
            }else{
            this._elementLike.classList.remove('elements__button-like_active');
            }
        }
       

    _isLiked() { 
        return Boolean(this._likesId.find(obj => obj._id == this._myId));
    }

    _likedCards = () => {
        const likeButtonActive = this._elementLike
        .classList.contains('elements__button-like_active');
        if (!likeButtonActive) {
            this._likeCard()
        } else {
            this._dislikeCard()
        }
    }


    _likeCard() {
        this._api.likeCard(this._elementId)
            .then((res) => {
                this._likesId = res.likes ;
                this._updateLikes();
            })
            .catch(err => {
                console.log(err);
            }) 
    }

    _dislikeCard() {
        this._api.dislikeCard(this._elementId)
            .then((res) => { 
                this._likesId = res.likes;
                this._updateLikes();
            })
            .catch(err => {
                console.log(err);
            })
    }

    generateCard() {
        this._element = this._getTemplate();
        const elementTitle = this._element.querySelector('.elements__item-title')
            .textContent = this._name;
        this._elementTrashBin = this._element.querySelector('.elements__item-delete-button')
        this._elementLikes = this._element.querySelector('.elements__likes');
        this._elementLike = this._element.querySelector('.elements__button-like')
        this._elementLikes.textContent = this._likes;
        this._elementImage = this._element.querySelector('.elements__item-photo')
        this._elementImage.src = this._link;
        this._elementImage.alt = `Фото ${elementTitle}`;
        this._updateLikes();
        this._removeDeleteButton();
        this._setEventListeners();
        return this._element;
    }

    _removeDeleteButton() {
        if (this._usersId !== this._myId) {
            this._elementTrashBin.remove();
        }
    }

    _setEventListeners() {
        this._elementLike.addEventListener('click', this._likedCards);

        this._elementTrashBin.addEventListener('click', () => {
            this._handleDeletePopup({ cardId: this._elementId, card: this._element });
        });

        this._elementImage.addEventListener('click', () => {
            this._handleCardClick({ name: this._name, link: this._link })
        });
    }
}





