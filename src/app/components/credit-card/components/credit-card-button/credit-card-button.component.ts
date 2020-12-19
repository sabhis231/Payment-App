import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-button',
  templateUrl: './credit-card-button.component.html',
  styleUrls: ['./credit-card-button.component.scss']
})
export class CreditCardButtonComponent implements OnInit {

  @Input("colorData") colorData;
  @Input("titleData") titleData;
  @Input("typeData") typeData;
  @Input("disabledData") disabledData;

  constructor() { }

  ngOnInit(): void {
  }

}
