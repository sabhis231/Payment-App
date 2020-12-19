import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { CreditCardSandbox } from 'src/app/components/credit-card/sandbox/credit-card.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentGuard implements CanActivate {
  constructor(private router: Router, private creditCardSandbox: CreditCardSandbox) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this.creditCardSandbox.loadAmountData().pipe(
        take(1),
        map((amount: number) => {
          localStorage.setItem('payment-url', state.url);
          if (amount>0) {
            return !!amount;
          } else {
            return this.router.createUrlTree(['/validateAmount'], {
              queryParams: {
                returnUrl: state.url,
              },
            });
          }
        })
      );
    }
  }