import { FormatCurrency } from "../FormattedCur.js";
import { formattedTime } from "../FormattedTime.js";
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
import { currentAccount } from "../Login.js";

export function movementsView(acc, sorted = false) {
  if (!acc) return;

  containerMovements.innerHTML = "";

  // کپی کردن آرایه برای جلوگیری از تغییر آن
  const movs = sorted ? [...acc.movements].sort((a, b) => a - b) : acc.movements;
  
  movs.forEach((mov, index) => {
    const type = mov > 0 ? "deposit" : "withdrawal";
    const date = new Date(acc.movementsDates[index]);
    const displayFormattedTime = formattedTime(date , acc.locale);
    const html = `
         <div class="movements__row">
         <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__date">${displayFormattedTime}</div>
          <div class="movements__value">${FormatCurrency(
            mov,
            acc.locale,
            acc.currency
          )}</div>
          </div>
          `;
    containerApp.style.opacity = 100;
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

let sorted = false;

const btnSort = document.querySelector(".btn--sort");
btnSort.addEventListener("click", e => {
  e.preventDefault();
  movementsView(currentAccount, !sorted);
  sorted = !sorted;
});

