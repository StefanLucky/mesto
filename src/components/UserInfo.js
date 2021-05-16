export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._profileName = name;
    this._profileJob = about;
    this._profileAvatar = avatar;
    this._name = "";
    this._about = "";
    this._avatar = "";
  }
  getUserInfo() {
    return { 
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
      avatar: this._avatar
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

/*   setUserInfo( userData ) {
    if (userData.name) this._profileName.textContent = userData.name;
    if (userData.about) this._profileJob.textContent = userData.about;
    if (userData.avatar) this._profileAvatar.src = userData.avatar;
  } */

}
