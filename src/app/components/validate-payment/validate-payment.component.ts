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
export class ValidatePaymentComponent implements OnInit {
  
  showLoader=false;
  constructor(private router: Router,private creditCardSandbox: CreditCardSandbox) { }

  payAmount:FormGroup;

  ngOnInit(): void {
    this.creditCardSandbox.resetData();
    this.payAmount= new FormGroup({
      'amount':new FormControl(null, [Validators.required,Validators.min(1), Validators.pattern('^[0-9]*$')])
    })
  }

  onPayButton() {
    this.showLoader=true; 
    this.creditCardSandbox.onAmountSelected(this.payAmount.value['amount']);
    this.router.navigateByUrl('redirectToPayment');
  }


 
}
