import { FormatCurrency } from "./FormattedCur.js";

const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

export function _calcSumIn(_account) {
  if (!_account) return;
  const sum = _account.movements
    .filter((mov) => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = FormatCurrency(
    sum,
    _account.locale,
    _account.currency
  );
}

export function _calcSumOut(_account) {
  if (!_account) return;
  const out = _account.movements
    .filter((mov) => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = FormatCurrency(
    Math.abs(out),
    _account.locale,
    _account.currency
  );
}

export function _calcInterest(_account) {
  if (!_account) return;
  const interest = _account.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * _account.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((_account, int) => _account + int, 0);
  labelSumInterest.textContent = FormatCurrency(
    interest,
    _account.locale,
    _account.currency
  );
}
