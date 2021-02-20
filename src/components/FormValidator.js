export class FormValidator {
    constructor(validationConfig, form) {
        this._form = form;
        this._input = validationConfig.inputSelector;
        this._submitBtnSelector = validationConfig.submitBtnSelector;
        this._inactiveBtn = validationConfig.inactiveBtn;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._inputList = this._form.querySelectorAll(this._input);
        this._submitButton = this._form.querySelector(this._submitBtnSelector);
    }

    _showError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideError(input) {
        const error = this._form.querySelector(`#${input.id}-error`);
        error.textContent = '';
        input.classList.remove(this._inputErrorClass);
        error.classList.remove(this._errorClass);
    }

    _checkInputValidity(input) {
        if (input.validity.valid) {
            this._hideError(input);
        } else {
            this._showError(input);
        }
    }

    setButtonState() {
        if (this._form.checkValidity()) {
            this._submitButton.classList.remove(this._inactiveBtn);
            this._submitButton.disabled = false;
        } else {
            this._submitButton.classList.add(this._inactiveBtn);
            this._submitButton.classList.remove('button');
            this._submitButton.disabled = true;
        }
    }

    _setEventListener() {
        this._inputList.forEach(input => {
            input.addEventListener('input', (evt) => {
                this._checkInputValidity(input);
                this.setButtonState();
            });
        });
    }
  
    enableValidation() {
        this._setEventListener();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })   
    }

    resetValidation() {
        this._inputList.forEach((inputSelector) => {
          this._hideError(inputSelector)
        });
      }
}













