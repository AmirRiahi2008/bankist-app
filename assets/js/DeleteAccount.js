import { accounts } from "./Accounts.js";
import { currentAccount } from "./Login.js";
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
const btnClose = document.querySelector(".form__btn--close");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
class DeleteAccount {
  constructor() {
    btnClose.addEventListener("click", this.handledeleteClick);
  }
  handledeleteClick(e) {
    e.preventDefault();

    if (
      +inputClosePin.value === +currentAccount.pin &&
      inputCloseUsername.value === currentAccount.username
    ) {
      const indexOfCurrentAccount = accounts.findIndex(
        (acc) => acc.username === currentAccount.username
      );

      accounts.splice(indexOfCurrentAccount, 1);
      containerApp.style.opacity = 0;
    }
    inputClosePin.value = inputCloseUsername.value = "";
  }
}
export default new DeleteAccount();
