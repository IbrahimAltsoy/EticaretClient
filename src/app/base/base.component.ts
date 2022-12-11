import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
constructor(private spinner: NgxSpinnerService){}
showSpinner(spinnerNameType: SpinnerType){
  this.spinner.show(spinnerNameType);
  setTimeout(() => this.hideSpinner(spinnerNameType), 500);
}
hideSpinner(spinnerNameType: SpinnerType){
  this.spinner.hide(spinnerNameType);

}


}
export enum SpinnerType{
  BallSpin ="s1",
  BallScaleMultiple="s2",
  LineSpinClockwiseFade="s3"


}
