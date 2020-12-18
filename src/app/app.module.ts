import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { CreditCardInputComponent } from './components/credit-card/components/credit-card-input/credit-card-input.component';
import { CreditCardBlockComponent } from './components/credit-card/components/credit-card-block/credit-card-block.component';
import { CreditCardButtonComponent } from './components/credit-card/components/credit-card-button/credit-card-button.component';
import { appReducer } from './store/reducer/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    CreditCardInputComponent,
    CreditCardBlockComponent,
    CreditCardButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
