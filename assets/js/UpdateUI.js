import { _calcInterest  , _calcSumIn , _calcSumOut } from "./Summary.js";
import { movementsView } from "./View/MovementView.js";
import { Balance } from "./Balance.js";
import { currentAccount } from "./Login.js";

export function update_UI(acc){
    _calcInterest(acc)
    _calcSumIn(acc)
    _calcSumOut(acc)
    Balance(acc)
    movementsView(acc)
}