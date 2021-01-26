export class FormValidator {
    constructor(validationConfig, form) {
        this._form = form;
        this._input = validationConfig.input;
        this._submitBtnSelector = validationConfig.submitBtnSelector;
        this._inactiveBtn = validationConfig.inactiveBtn;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
    }

    _showError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError(form, input) {
        const error = form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
    }

    _checkInputValidity(form, input) {
        if (input.validity.valid) {
            this._hideError(form, input);
        } else {
            this._showError(form, input);
        }
    }

    setButtonState(button, isActive) {
        if (isActive) {
            button.classList.remove(this._inactiveBtn);
            button.disabled = false;
        } else {
            button.classList.add(this._inactiveBtn);
            button.classList.remove('button');
            button.disabled = true;
        }
    }

    _setEventListener(form) {
        const inputList = form.querySelectorAll(this._input);
        const submitButton = form.querySelector(this._submitBtnSelector);
        
        inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(form, input);
                this.setButtonState(submitButton, form.checkValidity());
            });
        });
    }
  
    enableValidation() {
        this._setEventListener(this._form);
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })   
    }

}












