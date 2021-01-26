import Card from './Card.js';
import FormValidator from './FormValidator.js';


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

/*const imagePopup = document.querySelector('.popup__container-image');*/
const closeImagePopup = document.querySelector('.popup__close-button_img');

const elementsList = document.querySelector('.elements__list');
/*const elementTemplate = document.querySelector('.element__template');*/

const popupAdd = document.querySelector('.popup-add');
const popupImg = document.querySelector('.popup-img');
const popupEdit = document.querySelector('.popup-edit');

const imgName = document.querySelector('.popup__image-name');
const imgLink = document.querySelector('.popup__image-link');

const popupImage = document.querySelector('.popup__image');
const popupImageCaption = document.querySelector('.popup__image-caption');

// Начальный массив с карточками
const initialElements = [
  {
    name: "Париж",
    link:
      "https://images.unsplash.com/photo-1547619292-b592f993106f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=675&q=80",
    alt: "Эйфелева башня",
  },
  {
    name: "Каппадокия",
    link:
      "https://images.unsplash.com/photo-1607841479064-7bd262cb627c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    alt: "Каппадокия",
  },
  {
    name: "Каньон Пало Дюро",
    link:
      "https://images.unsplash.com/photo-1579477460827-0c6598bc1e51?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=693&q=80",
    alt: "Каньон Пало Дюро",
  },
  {
    name: "Камчатка",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    alt: "Камчатка",
  },
  {
    name: "Холмогорский район",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    alt: "Холмогорский район",
  },
  {
    name: "Байкал",
    link:
      "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    alt: "Байкал",
  },
];

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

/*
// Создаём новую карточку
function createElement(item) {
  const newElement = elementTemplate.content.cloneNode(true);
  const elementTitle = newElement.querySelector('.elements__item-title');
  const elementImage = newElement.querySelector('.elements__item-photo');
  const elementBtnLike = newElement.querySelector('.elements__button-like');
  const removeElementButton = newElement.querySelector('.elements__item-delete-button');

  elementTitle.textContent = item.name;
  elementImage.src = item.link;
  elementImage.alt = item.name;

  removeElementButton.addEventListener('click', removeElement);
  elementImage.addEventListener('click', () => openImagePopup(item));
  elementBtnLike.addEventListener("click", function() {
    doLike(elementBtnLike);
  });

  return newElement;
};
*/

// Добавляем информацию новой карточки через форму

/*function addImg(evt) {
  evt.preventDefault();*/
function addNewElement(evt) {

  const item = {
      name: imgName.value,
      link: imgLink.value
  };

  /*addElement(elementsList, createElement(item))*/
  const newCard = new Card(item, '.card__template', openImagePopup);
    addElement(elementsList, newCard.generateCard());
  closePopup(popupAdd);
  addForm.reset();
};

// Отрисовываем новую карточку на странице
function addElement(location, newElement) {
  location.prepend(newElement);
};

/*
// Открываем попап/режим просмотра фото
function openImagePopup(item) {

  popupImage.src = item.link;
  popupImageCaption.textContent = item.name;
  openPopup(popupImg);
};

// Ставим лайк
const doLike = function(itemBtn) {
  itemBtn.classList.toggle('elements__button-like_active');
};


// Удаляем карточки
function removeElement(e) {
  e.target.closest('.elements__item').remove();
};
*/

// Отрисовываем стартовые 6 карточек
function renderElements() {
  const elements = initialElements.map(createElement);
  elementsList.append(...elements);
};

//////////////// Слушатели//////////////// 

addBtn.addEventListener('click', function (e) {
  openPopup(popupAdd);
  const submitButton = popupAdd.querySelector(validationConfig.submitButtonSelector);
  setButtonState(submitButton, false, validationConfig);
  addForm.reset();
})

// Кнопка редактирования профиля
editBtn.addEventListener('click', function (e) {
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
  openPopup(popupEdit);
});

// Закртыие попапа редактирования профиля
closeEditBtn.addEventListener('click', function (e) {
  closePopup(popupEdit);
});

/*/ Кнопка добавления карточки
addBtn.addEventListener('click', function (e) {
  openPopup(popupAdd);
});*/

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

