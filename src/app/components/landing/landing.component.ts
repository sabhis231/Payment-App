import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DialogBoxComponent } from 'src/app/shared/component/dialog-box/dialog-box.component';
import { CreditCardSandbox } from '../credit-card/sandbox/credit-card.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit , OnDestroy{

  constructor(private creditCardSandbox: CreditCardSandbox, public dialog: MatDialog, private router: Router) { }
  sub: Subscription[] = [];
  creditData:any;
  showLoader=false;
  disabled=false;

  ngOnInit(): void {
    this.sub.push(
    this.creditCardSandbox.loadCard().subscribe((statedata)=>{
      this.creditData=statedata
      if(!statedata.paymentInProcess && statedata.paymentReceipt != null) {
        this.openDialog();
        this.showLoader=false;
      }
    }));
  }

  onSendPayment(eventData) {
    this.disabled=true;
    this.showLoader=true;
    this.creditCardSandbox.onPayAmount(eventData);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(
      DialogBoxComponent,
      {
        data:{
          creditData: this.creditData.creditCardDetails,
          receipt: this.creditData.paymentReceipt,
          status: this.creditData.paymentStatus
        }
      });

      this.sub.push(
        dialogRef.afterClosed().subscribe(result => {
          this.router.navigate(['/validateAmount']);
        })
      )
  }

  ngOnDestroy() {
    this.sub.forEach((s) => s.unsubscribe());
  }
  
}
