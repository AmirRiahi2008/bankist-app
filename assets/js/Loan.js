import { currentAccount } from "./Login.js";
import { interval , startLogOutTimer , timer } from "./Timer.js";
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const btnLoan = document.querySelector(".form__btn--loan");
class Loan {
  constructor() {
    btnLoan.addEventListener("click", this.handleLoanClick);
  }
  handleLoanClick(e) {
    e.preventDefault();
    const amount = +inputLoanAmount.value;

    if (amount > 0 && currentAccount.movements.some((mov) => mov > amount)) {
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toLocaleString());
    }
    inputLoanAmount.value = "";
    if(timer) clearInterval(timer)
      interval = startLogOutTimer()
  }
}

export default new Loan();
