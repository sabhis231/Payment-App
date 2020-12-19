import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditCard } from 'src/app/components/credit-card/models/credit-card.model';

export interface DialogData {
  creditData: CreditCard;
  receipt: string;
  status: boolean;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  currentDate:Date;
  
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
      this.currentDate = new Date();
    }
    
  onNoClick(): void {
    this.dialogRef.close();
  }


}
