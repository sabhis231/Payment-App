import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../store/reducer/app.reducer';
import * as fromCreditCardAction from '../store/actions/credit-card.action';


@Injectable({
  providedIn: 'root'
})
export class CreditCardSandbox {

  constructor(private store: Store<fromApp.AppState>) {}

  loadCard() {
    return this.store.select('creditCard');
  }


  onPayAmount(cardData) {
    console.log(cardData); 
    this.store.dispatch(new fromCreditCardAction.PayAmount(cardData));
  }
}
