import '../pages/index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {
  editBtn,
  addBtn,
  inputName,
  inputDesc,
  profileName,
  profileJob,
  profileNameSelector,
  profileJobSelector,
  editForm,
  addForm,
  elementsList,
  initialCards,
  validationConfig
} from '../utils/constants.js';

const userInfo = new UserInfo(profileNameSelector, profileJobSelector);

const popupImg = new PopupWithImage('.popup-img');
popupImg.setEventListeners();

const popupEdit = new PopupWithForm('.popup-edit', (UserData) => {
  userInfo.setUserInfo(UserData);
});
popupEdit.setEventListeners();

const popupAdd = new PopupWithForm('.popup-add', (item) => {
  const cardSample = new Card(item, '.element__template', (item) => { popupImg.open(item) });
  const card = cardSample.generateCard();
  list.addOneElement(card);
});
popupAdd.setEventListeners();

const list = new Section({
  items: initialCards,
  render: (item) => {
      const cardSample = new Card(item, '.element__template', (item) => { popupImg.open(item) });
      const card = cardSample.generateCard();

      list.addElements(card);
  },
},
  elementsList
);
list.renderElements();

addBtn.addEventListener('click', () => {
  popupAdd.open();
  addFormValidator.resetValidation();
  addFormValidator.setButtonState(false);
});

editBtn.addEventListener('click', () => {
  popupEdit.open();
  inputName.value = profileName.textContent;
  inputDesc.value = profileJob.textContent;

  addFormValidator.resetValidation();
});


const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();
