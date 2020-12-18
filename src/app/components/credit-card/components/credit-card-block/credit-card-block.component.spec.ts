import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditCardBlockComponent } from './credit-card-block.component';

describe('CreditCardBlockComponent', () => {
  let component: CreditCardBlockComponent;
  let fixture: ComponentFixture<CreditCardBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditCardBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditCardBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
