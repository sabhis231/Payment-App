import { Actions } from "@ngrx/effects";
import { CreditCard } from "../../models/credit-card.model";
import * as fromCreditCardAction from '../actions/credit-card.action';

export interface State {
    creditCardDetails:CreditCard;
    amount:number;
    paymentStatus:boolean;
    paymentReceipt:string;
    paymentInProcess: boolean;
    paymentError: boolean;
}
const initialState:State= {
    creditCardDetails:null,
    amount:-1,
    paymentStatus: false,
    paymentReceipt:null,
    paymentInProcess: false,
    paymentError: false,
}

export function creditCardReducer (state=initialState, action:fromCreditCardAction.CreditCardTypes) {

    switch(action.type) {
        case fromCreditCardAction.LOAD_CARD:
            return state
        case fromCreditCardAction.AMOUNT_SELECTED:
            return {
                ...state, 
                amount:action.payload,
                creditCardDetails:null,
                paymentStatus: false,
                paymentReceipt:null,
                paymentInProcess: false,
                paymentError: false,
            }
        case fromCreditCardAction.PAY_AMOUNT:
            return {
                ...state, 
                paymentInProcess:true,
                creditCardDetails:action.payload
            }
        case fromCreditCardAction.PAYMENT_DONE:
            return {
                ...state, 
                paymentReceipt:action.payload,
                paymentStatus:true,
                paymentError: false,
                paymentInProcess:false,
            }
        case fromCreditCardAction.PAYMENT_FAILED:
            return {
                ...state, 
                paymentReceipt:null,
                paymentInProcess:false,
                paymentError: true,
                paymentStatus:action.payload
            }
        default:
            return state;
    }

}