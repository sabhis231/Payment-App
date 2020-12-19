import { Actions } from "@ngrx/effects";
import { CreditCard } from "../../models/credit-card.model";
import * as fromCreditCardAction from '../actions/credit-card.action';

export interface State {
    creditCardDetails:CreditCard;
    amount:Number;
}
const initialState:State= {
    creditCardDetails:null,
    amount:-1,
}

export function creditCardReducer (state=initialState, action:fromCreditCardAction.CreditCardTypes) {

    switch(action.type) {
        case fromCreditCardAction.LOAD_CARD:
            return state
        case fromCreditCardAction.PAY_AMOUNT:
            return {
                ...state, 
                creditCardDetails:action.payload
            }
        default:
            return state;
    }

}