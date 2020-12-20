
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__container');

//заполнение текстовых полей
const popupField = document.querySelectorAll('.popup__field');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');

const inputName = document.querySelector('.popup__field_name');
const inputDesc = document.querySelector('.popup__field_description');

const сlosePopupBtn = document.querySelector('.popup__close-button');


function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDesc.value = profileDesc.textContent;
}


function closePopup() {
    popup.classList.remove('popup_opened');
}


function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;

  closePopup();
}

editBtn.addEventListener('click', openPopup);
сlosePopupBtn.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);