import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent extends BaseComponent implements OnInit{
  constructor(spiner: NgxSpinnerService){
    super(spiner);
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.LineSpinClockwiseFade)

  }

}
