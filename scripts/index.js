import { Card } from './Card.js';
import { initialCards } from './initialCards.js';
import { FormValidator } from './FormValidator.js';
import { validationConfig } from './validationConfig.js';


const editBtn = document.querySelector('.profile__edit-button');
const closeEditBtn = document.querySelector('.popup__close-button_edit');

const addBtn = document.querySelector('.profile__add-button');
const closeAddBtn = document.querySelector('.popup__close-button_add');

const inputName = document.querySelector('.popup__field_name');
const inputDesc = document.querySelector('.popup__field_description');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');

const editForm = document.querySelector('[name="editForm"]');
const addForm = document.querySelector('[name="addForm"]');

const closeImagePopup = document.querySelector('.popup__close-button_img');

const elementsList = document.querySelector('.elements__list');

const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');
const popupEdit = document.querySelector('.popup-edit');

const imgName = document.querySelector('.popup__image-name');
const imgLink = document.querySelector('.popup__image-link');

const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

const addFormValidator = new FormValidator(validationConfig, addForm);
addFormValidator.enableValidation();

const editFormValidator = new FormValidator(validationConfig, editForm);
editFormValidator.enableValidation();

//////////////// Функции //////////////// 

// Открываем попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupOverlay);
};

// Закрываем попап
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupOverlay);
};

// Закрываем попап клавишей "Escape"
function closePopupEsc(e) {
  const activePopup = document.querySelector('.popup_opened');
  if (e.key === 'Escape' && activePopup) {
      closePopup(activePopup);
  }
};

// Закрываем попап при overlay
function closePopupOverlay(evt){
  if(evt.target.classList.contains('popup_opened')){
    closePopup(evt.target);
  }
}

// Заносим информацию в профиль
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;

  closePopup(popupEdit);
};

// Функция создания карточки
function createCard(item) {
 const newCard = new Card(item, '#blank', openImagePopup);
  const card = newCard.generateCard();
  return card;
}

// Добавляем информацию новой карточки через форму
function addNewElement(evt) {
  const item = {
      name: imgName.value,
      link: imgLink.value
  };

  addElement(elementsList, createCard(item));
  closePopup(popupAdd);
  addForm.reset();
};

// Отрисовываем новую карточку на странице
function addElement(location, newElement) {
  location.prepend(newElement);
};

// Открываем попап/режим просмотра фото
function openImagePopup(item) {

  popupImage.src = item.link;
  popupImageCaption.textContent = item.name;
  openPopup(popupImg);
};

// Отрисовываем стартовые 6 карточек
function renderElements() {
  initialCards.map((item) => {
    elementsList.append(createCard(item));
})
}

//////////////// Слушатели//////////////// 

// Кнопка добавления карточки
addBtn.addEventListener('click', function (e) {
  addForm.reset();
  addFormValidator.resetValidation();
  openPopup(popupAdd);
})

// Кнопка редактирования профиля
editBtn.addEventListener('click', function (e) {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  editFormValidator.resetValidation();
  openPopup(popupEdit);
});

// Закртыие попапа редактирования профиля
closeEditBtn.addEventListener('click', function (e) {
  closePopup(popupEdit);
});

// Закрытие попапа на добавление карточки
closeAddBtn.addEventListener('click', function (e) {
  closePopup(popupAdd);
});

// Закрытие попапа/просмотра фото
closeImagePopup.addEventListener('click', function (e) {
  closePopup(popupImg);
});

// Добавление новой карточки
addForm.addEventListener('submit', addNewElement);

// Подтверждение внесения изменений в профиль
editForm.addEventListener('submit', formSubmitHandler);

//// Вызов отрисовки стартовых карточек
renderElements();

