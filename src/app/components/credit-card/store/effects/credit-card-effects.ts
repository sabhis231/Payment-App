import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CreditCardService } from "../../services/credit-card.service";
import * as fromCreditCardActions from '../actions/credit-card.action';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class CreditcardEffects {
    constructor(private action$:Actions, private creditCardService: CreditCardService) {}

    @Effect()
    savePayment=this.action$.pipe(
        ofType(fromCreditCardActions.PAY_AMOUNT),
        switchMap((creditCardData: fromCreditCardActions.PayAmount)=>{

            return this.creditCardService.payAmount(creditCardData.payload).pipe(
                map((resData)=>{
                    if (resData) {
                        return new fromCreditCardActions.PaymentDone(resData['name']);
                      } else {
                        return new fromCreditCardActions.PaymentFailed(false);
                      }
                }),
                catchError((error) => {
                    return of(
                        new fromCreditCardActions.PaymentFailed(false)
                    );
                  })
            )
        })
    )
    


}