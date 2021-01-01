const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitBtnSelector: '.popup__button',
    inactiveBtnClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

//////////////// Функции //////////////// 

// Показываем ошибки
function showError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
}

// Скрываем ошибки
function hideError(form, input, config) {
    const error = form.querySelector(`#${input.id}-error`);
    error.textContent = '';
    input.classList.remove(config.inputErrorClass);
    error.classList.remove(config.errorClass);
}

// Провверяем валидность инпутов
function checkInputValidity(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config);
    } else {
        showError(form, input, config);
    }
}

// Блокируем кнопки
function setBtnState(button, isActive, config) {
    if (isActive) {
        button.classList.remove(config.inactiveBtnClass);
        button.disabled = false;
    } else {
        button.classList.add(config.inactiveBtnClass);
        button.classList.remove('button');
        button.disabled = true;
    }
}

// Добавляем слушателей/проверяем валидность
function setEventListener(form, config) {
    const inputList = form.querySelectorAll(config.inputSelector);
    const submitButton = form.querySelector(config.submitBtnSelector);

    inputList.forEach(input => {
        input.addEventListener('input', (evt) => {
            checkInputValidity(form, input, config);
            setBtnState(submitButton, form.checkValidity(), config);
        });
    });
}

// 
function enableValidation(config) {
    const forms = document.querySelectorAll(config.formSelector);
    forms.forEach(form => {
        setEventListener(form, config);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
    });
}


enableValidation(validationConfig)


