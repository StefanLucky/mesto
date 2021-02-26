export const editBtn = document.querySelector('.profile__edit-button');
export const addBtn = document.querySelector('.profile__add-button');
export const editForm = document.querySelector('[name="editForm"]');
export const addForm = document.querySelector('[name="addForm"]');

export const inputName = document.querySelector('.popup__field_name');
export const inputDesc = document.querySelector('.popup__field_description');
/* export const profileNameSelector = '.profile__name';
export const profileJobSelector= '.profile__description'; */
export const name = document.querySelector('.profile__name');
export const about = document.querySelector('.profile__description');
export const avatar = document.querySelector('.profile__avatar');
export const avatarBtn = document.querySelector('.profile__avatar-icon');
export const avatarForm = document.querySelector('[name="avatar-update"]');

export const popupNameField = document.querySelector('[name="inputname"]');
export const popupAboutField = document.querySelector('[name="inputdescription"]');

export const elementsList = document.querySelector('.elements__list');


export const validationConfig = {
    form: '.popup__form',
    inputSelector: '.popup__input',
    submitBtnSelector: '.popup__button',
    inactiveBtn: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

export const initialCards = [
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
  
