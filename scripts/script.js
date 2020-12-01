
const popup = document.querySelector('.popup');
const editBtn = document.querySelector('.profile__edit-button');
const formElement = document.querySelector('.popup__container');
const popupField = document.querySelectorAll('.popup__field');
const profileName = document.querySelector('.profile__name');
const profileDesc = document.querySelector('.profile__description');
const сlosePopupBtn = document.querySelector('.popup__close-button');


function openPopup() {
  popup.classList.add('popup_opened');
}
editBtn.addEventListener('click', openPopup);


popupField[0].value = profileName.textContent;
popupField[1].value = profileDesc.textContent;


function closePopup() {
    popup.classList.remove('popup_opened');
}
сlosePopupBtn.addEventListener('click', closePopup);


function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = popupField[0].value;
  profileName.textContent = nameInput;
  let descInput = popupField[1].value;
  profileDesc.textContent = descInput;

  closePopup();
}
formElement.addEventListener('submit', formSubmitHandler);