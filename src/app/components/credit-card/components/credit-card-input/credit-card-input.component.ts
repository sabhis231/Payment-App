import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent implements OnInit {
  @Input('classData') classData;
  @Input('matIconData') matIconData;
  @Input('titleData') titleData;
  @Input('placeholderData') placeholderData;
  @Input('controlNameData') controlNameData;

constructor() { }

  ngOnInit(): void {
  }

}
