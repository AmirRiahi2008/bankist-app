import { FormatCurrency } from "./FormattedCur.js";

const labelBalance = document.querySelector(".balance__value");

export function Balance(account) {
  if (!account) return;
  account.balance = account.movements.reduce((cur, acc) => cur + acc, 0);
  labelBalance.textContent = FormatCurrency(
    account.balance,
    account.locale,
    account.currency
  );
}
