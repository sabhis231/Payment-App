import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CreditCardSandbox } from '../credit-card/sandbox/credit-card.service';

@Component({
  selector: 'app-validate-payment',
  templateUrl: './validate-payment.component.html',
  styleUrls: ['./validate-payment.component.scss']
})
export class ValidatePaymentComponent implements OnInit, OnDestroy {
  sub: Subscription[] = [];
  amount:Number=-1;
  showLoader=false;
  constructor(private router: Router,private creditCardSandbox: CreditCardSandbox) { }

  payAmount:FormGroup;

  ngOnInit(): void {
    this.sub.push(
    this.creditCardSandbox.loadCard().subscribe((statedata)=>{
      console.log(statedata)
      this.amount=statedata.amount
    })
    )

    this.payAmount= new FormGroup({
      'amount':new FormControl(null, [Validators.required])
    })
  }

  onPayButton() {
    this.showLoader=true; 
    this.creditCardSandbox.onAmountSelected(this.payAmount.value['amount']);
    this.router.navigateByUrl('redirectToPayment');
  }


  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
  }
}
