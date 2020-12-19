import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardButtonComponent } from './components/credit-card/components/credit-card-button/credit-card-button.component';
import { appReducer } from './store/reducer/app.reducer';
import { MaterialModule } from './material/material.module';
import { LandingComponent } from './components/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreditcardEffects } from './components/credit-card/store/effects/credit-card-effects';
import { HttpClientModule } from '@angular/common/http';
import { ValidatePaymentComponent } from './components/validate-payment/validate-payment.component';
import { SnackBarComponent } from './shared/component/snack-bar/snack-bar.component';
import { DialogBoxComponent } from './shared/component/dialog-box/dialog-box.component';



@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditCardButtonComponent,
    LandingComponent,
    ValidatePaymentComponent,
    SnackBarComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([CreditcardEffects]),
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
