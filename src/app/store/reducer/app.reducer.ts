import { ActionReducerMap } from '@ngrx/store'
import * as fromCreditCardState from '../../components/credit-card/store/reducers/credit-card.reducer'
export interface AppState { 
    creditCard: fromCreditCardState.State
}
export const appReducer: ActionReducerMap<AppState> = {
    creditCard: fromCreditCardState.creditCardReducer
}