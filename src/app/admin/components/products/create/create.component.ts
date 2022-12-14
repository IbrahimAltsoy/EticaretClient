import { Component, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { ProductService } from 'src/app/services/common/models/product.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit{
  // alertify: AlertifyService;
  constructor(spinner: NgxSpinnerService, private productService : ProductService, private alertify: AlertifyService){
    super(spinner)
  }
  ngOnInit(): void {

  }
@Output() createdProduct:EventEmitter<Create_Product> = new EventEmitter();

  create(name:HTMLInputElement, stock:HTMLInputElement, price:HTMLInputElement){
    this.showSpinner(SpinnerType.LineSpinClockwiseFade);
    const create_product: Create_Product= new Create_Product();
    create_product.name = name.value;
    create_product.stock =parseInt(stock.value);
    create_product.price = parseFloat(price.value);
    // if(!name.value){
    //   this.alertify.message("Name ismi boş geçilemez",{
    //     dismissOthers: true,
    //     messageType: MessageType.Error,
    //     position: Position.TopRight
    //   });
    //   return ;
    // }
    // if(parseInt(stock.value)<0){
    //   this.alertify.message("Ürün stoğu negatif ve boş geçmeyiniz girmeyiniz!",{
    //     dismissOthers: true,
    //     messageType: MessageType.Error,
    //     position: Position.TopRight
    //   });
    //   return ;
    // }

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallScaleMultiple);
        this.alertify.message("Kayıt başarılı bir şekilde oldu",{
          dismissOthers: true,
          messageType: MessageType.Success,
          position: Position.TopRight
        });
        this.createdProduct.emit(create_product);
      }, errorMessage =>{
        this.alertify.message(errorMessage,
          {
            dismissOthers:true,
            messageType: MessageType.Error,
            position: Position.TopRight

          });
      });


  }

}
