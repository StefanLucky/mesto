export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._profileName = name;
    this._profileJob = about;
    this._profileAvatar = avatar;
    this._name = "";
    this._about = "";
    this._id = "";
    this._avatar = "";
  }
  getUserInfo() {
    return { 
      name: this._name,
      about: this._about
    };
  }
  setUserInfo(userData) {
    this._name = userData.name;
    this._about = userData.about;
    this._profileName.textContent = this._name;
    this._profileJob.textContent = this._about;
  }
  setUserAvatar(userData) {
    this._avatar = userData.avatar;
    this._profileAvatar.src = this._avatar;
  }
}
