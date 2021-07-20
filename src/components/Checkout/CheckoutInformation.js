class CheckoutInformation {
  constructor() {
    this.userData = {};
  }

  setUserData(data) {
    this.userData = {...this.userData, ...data};
  }
  getUserData() {
    return this.userData;
  }
}

export default new CheckoutInformation()