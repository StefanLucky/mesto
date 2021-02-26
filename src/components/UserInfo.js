export default class UserInfo {
  constructor({ name, about }) {
    this._profileName = name;
    this._profileJob = about;
  }
  getUserInfo() {
    return {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    };
  }
  setUserInfo(userData) {
    this._profileName.textContent = userData.inputname;
    this._profileJob.textContent = userData.inputdescription;
  }
}
