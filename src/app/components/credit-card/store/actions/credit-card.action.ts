import { Action } from '@ngrx/store';

export const LOAD_CARD='[CreditCard] LOAD CARD';

export class LoadCard implements Action {
    readonly type = LOAD_CARD;
    constructor(public payload: {}) {}
}

export type CreditCardTypes =
  | LoadCard;

