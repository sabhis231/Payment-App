import { Action } from '@ngrx/store';
import { CreditCard } from '../../models/credit-card.model';

export const LOAD_CARD='[CreditCard] LOAD CARD';
export const RESET_CARD='[CreditCard] RESET CARD';
export const PAY_AMOUNT='[CreditCard] PAY AMOUNT';
export const PAYMENT_DONE='[CreditCard] PAYMENT DONE';
export const PAYMENT_FAILED='[CreditCard] PAYMENT FAILED';
export const AMOUNT_SELECTED='[CreditCard] AMOUNT SELECTED';

export class LoadCard implements Action {
    readonly type = LOAD_CARD;
    constructor(public payload: {}) {}
}
export class ResetCard implements Action {
    readonly type = RESET_CARD;
}
export class PayAmount implements Action {
    readonly type = PAY_AMOUNT;
    constructor(public payload: CreditCard) {}
}
export class AmountSelected implements Action {
    readonly type = AMOUNT_SELECTED;
    constructor(public payload: number) {}
}
export class PaymentDone implements Action {
    readonly type = PAYMENT_DONE;
    constructor(public payload: string) {}
}
export class PaymentFailed implements Action {
    readonly type = PAYMENT_FAILED;
    constructor(public payload: boolean) {}
}

export type CreditCardTypes =
  | LoadCard | PayAmount | PaymentDone | PaymentFailed | AmountSelected | ResetCard;

