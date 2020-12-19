import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';
import { LandingComponent } from './components/landing/landing.component';
import { ValidatePaymentComponent } from './components/validate-payment/validate-payment.component';
import { PaymentGuard } from './shared/guard/payment-guard.guard';


const routes: Routes = [
  {path:'', redirectTo:'/validateAmount', pathMatch:'full'},
  {path:'validateAmount', component:ValidatePaymentComponent},
  {path:'redirectToPayment', component:LandingComponent, canActivate:[PaymentGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
