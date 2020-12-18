import { Actions } from "@ngrx/effects";
import { CreditCard } from "../../models/credit-card.model";
import * as fromCreditCardAction from '../actions/credit-card.action';

export interface State {
    creditCardDetails:CreditCard;
}
const initialState:State= {
    creditCardDetails:null
}

export function creditCardReducer (state=initialState, action:fromCreditCardAction.CreditCardTypes) {

    switch(action) {
        default:
            return state;
    }

}