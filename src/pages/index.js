import '../pages/index.css';
import Card from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';
import {
  editBtn,
  addBtn,
  inputName,
  inputDesc,
/*   profileName,
  profileJob, */
/*   profileNameSelector,
  profileJobSelector, */
  editForm,
  addForm,
  elementsList,
/*   initialCards, */
  validationConfig,
  name,
  about,
  avatar,
  avatarBtn,
  avatarForm
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
      authorization: '1d090ed9-18e3-4e58-8b6c-50bc7984ceff',
      'Content-Type': 'application/json'
  }
});

let userId = null;
/* const userInfo = new UserInfo(profileNameSelector, profileJobSelector); */

/* const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners(); */

api.getUserInfo()
    .then(userInfo => {
        userId = userInfo._id;
        name.textContent = userInfo.name;
        about.textContent = userInfo.about;
        avatar.src = userInfo.avatar;
    })
    .catch(err => {
        console.log(err);
    })

const userInfo = new UserInfo({
  name: name,
  about: about
});

const popupEdit = new PopupWithForm('.popup-edit', (userData) => {
  popupEdit.renderLoading(true);
  api.updateUserInfo(userData)
      .then(userData => {
          return userData;
      })
      .catch(err => {
          console.log(err);
      })
      .finally(() => {
          popupEdit.renderLoading(false);
      })
  userInfo.setUserInfo(userData);
});
popupEdit.setEventListeners();

const updateAvatar = new PopupWithForm('.popup-update-avatar', (userData) => {
  updateAvatar.renderLoading(true)
  api.updateAvatar(userData)
      .then(userData => {
          avatar.src = userData.avatar;
      })
      .catch(err => {
          console.log(err);
      })
      .finally(() => {
          updateAvatar.renderLoading(false);
      })
})
updateAvatar.setEventListeners();

avatarBtn.addEventListener('click', () => {
  updateAvatar.open();
  avatarFormValidator.resetValidation();
  avatarFormValidator.setButtonState(false);
})


/* const popupAdd = new PopupWithForm('.popup-add', (item) => {
  const cardSample = new Card(item, '.element__template', (item) => { popupImg.open(item) });
  const card = cardSample.generateCard();
  list.addOneElement(card);
});
popupAdd.setEventListeners(); */


const cardsItem = new Section({
  render: (item) => {
    cardsItem.addElements(createCard(item));
    },
  },
  elementsList
);

api.getInitialCards()
    .then(cards => {
        cardsItem.renderElements(cards);
    }
    )
    .catch(err => {
        console.log(err);
    });


const popupAdd = new PopupWithForm('.popup-add', (userData) => {
    popupAdd.renderLoading(true);
    api.createCard(userData)
        .then(userData => {
            cardsItem.addOneElement(createCard(userData));
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            popupAdd.renderLoading(false);
        })
});
popupAdd.setEventListeners();


function createCard(cardData) {
    const cardSample = new Card(
        { ...cardData, userId },
        '.element__template',
        (userData) => {
            imagePopup.open(userData);
        },
        (cardData) => {
            popupDeleteCard.open(cardData);
        },
        api);
    const card = cardSample.generateCard();
    return card;
}


const popupDeleteCard = new PopupDeleteCard('.popup-delete', (cardData) => {
  api.deleteCard(cardData.cardId)
      .then(() => {
          cardData.card.remove();
      })
      .catch(err => {
          console.log(err);
      })
});
popupDeleteCard.setEventListeners();


const imagePopup = new PopupWithImage('.popup-img');
imagePopup.setEventListeners();

addBtn.addEventListener('click', () => {
  popupAdd.open();
  addFormValidator.resetValidation();
  addFormValidator.setButtonState(false);
});

editBtn.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  popupEdit.open();
  inputName.value = info.name;
  inputDesc.value = info.about;

  addFormValidator.resetValidation();
});

const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(validationConfig, avatarForm);
avatarFormValidator.enableValidation();