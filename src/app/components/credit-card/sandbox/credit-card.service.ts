import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
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

  loadAmountData() {
    return this.store.select('creditCard').pipe(
      map((cardData)=>{
        return cardData.amount;
      })
    );
  }


  onPayAmount(cardData) {
    this.store.dispatch(new fromCreditCardAction.PayAmount(cardData));
  }

  onAmountSelected(amount:number) {
    this.store.dispatch(new fromCreditCardAction.AmountSelected(amount));
  }
}
