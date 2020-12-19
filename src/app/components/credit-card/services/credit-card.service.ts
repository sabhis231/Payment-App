import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditCard } from '../models/credit-card.model';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

 backendUrl="https://payment-app-a73b8-default-rtdb.firebaseio.com/paymentHistory"

  constructor(private http:HttpClient) { }

  payAmount(creditCard:CreditCard) {
    return this.http.post(this.backendUrl, creditCard);
  }

}