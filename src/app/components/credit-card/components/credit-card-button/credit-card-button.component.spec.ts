import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardButtonComponent } from './credit-card-button.component';

describe('CreditCardButtonComponent', () => {
  let component: CreditCardButtonComponent;
  let fixture: ComponentFixture<CreditCardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
