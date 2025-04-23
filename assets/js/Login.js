import { accounts } from "./Accounts.js";
import { interval , startLogOutTimer , timer } from "./Timer.js";
const btnLogin = document.querySelector(".login__btn");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const containerApp = document.querySelector(".app");
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");

export let currentAccount;
class Login {
  constructor() {
    this.createUsername();

    btnLogin.addEventListener("click", this.handleClick.bind(this));
  }

  createUsername() {
    accounts.forEach((acc) => {
      return (acc.username = acc.owner
        .toLowerCase()
        .split(" ")
        .map((name) => name[0])
        .join(""));
    });
  }
  handleClick(e) {
    e.preventDefault();

    currentAccount = accounts.find(
      (acc) => {
      return  acc.username === inputLoginUsername.value && +acc.pin === +inputLoginPin.value
      }
    );
   


    if (currentAccount) {
   

      labelWelcome.textContent = `Welcome Back ${
        currentAccount.owner.split(" ")[0]
      }`;
      const now = new Date();
      const options = {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      };

      labelDate.textContent = new Intl.DateTimeFormat(
        currentAccount.locale,
        options
      ).format(now);
      containerApp.style.opacity = 1;

      inputLoginPin.value = inputLoginUsername.value = "";
      console.log(interval , timer);
      if(timer) clearInterval(timer)
        interval = startLogOutTimer()
    }else return
  }
}
export default new Login();
