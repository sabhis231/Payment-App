import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  formButtonData } from '../../../assets/credit-card-input';
import { CreditCard } from './models/credit-card.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  @Input("creditData") creditData;
  @Input("disabledData") disabledData;
  @Output("sendPayment") sendPayment=new EventEmitter<CreditCard>();

   buttonData=formButtonData['button-field'];
   cardData: CreditCard = null;
   amount:Number=0;

   creditCardForm:FormGroup;
   minDate: Date;

  constructor() { 
    
  } 

  ngOnInit(): void {
    this.amount=this.creditData["amount"];
    this.minDate = new Date();
    this.creditCardForm=new FormGroup({
      'cardHolderName': new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]),
      'cardNumber': new FormControl(null, [Validators.required]),
      'expiryDate': new FormControl(null, [Validators.required]),
      'cvv': new FormControl(null, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]{3}')]),
    });
    
  }
  onSubmitForm() {
    this.cardData=this.creditCardForm.value;
    this.cardData.amount=this.amount;
    this.sendPayment.emit(this.cardData)
  } 
  

}
