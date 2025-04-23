import Login, { currentAccount } from "./Login.js";
import * as MovementsView from "./View/MovementView.js";
import { Balance } from "./Balance.js";
import { _calcInterest, _calcSumIn, _calcSumOut } from "./Summary.js";
import Transfer from "./Transfer.js";
import { update_UI } from "./UpdateUI.js";
import Loan from "./Loan.js";
import DeleteAccount from "./DeleteAccount.js";
import { accounts } from "./Accounts.js";

//Elements
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const btnLogin = document.querySelector(".login__btn");

//Functions
function controlLogin() {
  Balance(currentAccount);
  _calcInterest(currentAccount);
  _calcSumIn(currentAccount);
  _calcSumOut(currentAccount);

  MovementsView.movementsView(currentAccount);
}

function controlTrasfer(e) {
  Transfer.handleTransferClick(e);
  update_UI(currentAccount);
}

function controlGetLoan(e) {
  update_UI(currentAccount);
}

function init() {
  btnLogin.addEventListener("click", controlLogin);
  btnTransfer.addEventListener("click", controlTrasfer);
  btnLoan.addEventListener("click", controlGetLoan);
}
init();
console.log(accounts);
