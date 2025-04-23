import { accounts } from "./Accounts.js";
import { FormatCurrency } from "./FormattedCur.js";
import { currentAccount } from "./Login.js";
import { update_UI } from "./UpdateUI.js";
import { interval , startLogOutTimer  , timer} from "./Timer.js";
const btnTransfer = document.querySelector(".form__btn--transfer");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");

class Transfer {
  constructor() {
    btnTransfer.addEventListener("click", this.handleTransferClick);
  }

  handleTransferClick(e) {
    e.preventDefault();
    const amount = +inputTransferAmount.value;
    const reciverAccount = accounts.find(
      (acc) => acc.username === inputTransferTo.value
    );
    if (!reciverAccount) return;

    if (
      amount > 1 &&
      reciverAccount &&
      currentAccount.balance > amount &&
      reciverAccount !== currentAccount
    ) {
      let allow = confirm(
        `Are You Shere To Transfer ${FormatCurrency(
          amount,
          currentAccount.locale,
          currentAccount.currency
        )} To ${reciverAccount.owner}`
      );
      if (allow) {
        reciverAccount.movements.push(+amount);
        currentAccount.movements.push(-amount);
        currentAccount.movementsDates.push(new Date().toISOString());
        reciverAccount.movementsDates.push(new Date().toISOString());
        update_UI(currentAccount);
        inputTransferAmount.value = inputTransferTo.value = "";
      
        if(timer) clearInterval(timer)
          interval = startLogOutTimer()
      }
    }
  }
}
export default new Transfer();
