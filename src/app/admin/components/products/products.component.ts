import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {
  constructor( spinner: NgxSpinnerService, private httpClientService: HttpClientService){
    super(spinner)
  }
  ngOnInit(): void {

  }
  @ViewChild(ListComponent) listComponent:ListComponent;
  createdProduct(ceratedProduct:Create_Product){
    this.listComponent.getProducts();

  }
}

    // this.showSpinner(SpinnerType.BallSpin);
    // this.httpClientService.get<Create_Product[]>({
    //   controller :"products"
    // }).subscribe(data=>console.log(data));

    // this.httpClientService.post({
    //   controller: "products"
    // },{
    //   name: "Kombi",
    //   stock: 150,
    //   price: 270
    // }).subscribe();
    // this.httpClientService.post({
    //   controller: "products"
    // },{
    //   name: "Terlik",
    //   stock: 250,
    //   price: 370
    // }).subscribe();
    // this.httpClientService.put({
    //   controller: "products",
    // },{
    //   id: "c836ca4b-c025-4eb4-bb41-111ad7a06375",
    //   name: "Sandalet",
    //   stock: 101,
    //   price: 3
    // }).subscribe();
    // this.httpClientService.delete({
    //   controller: "products"
    // },
    // "610b5ad9-fde7-4957-b7d8-b5feefb7ebd5"
    // ).subscribe();
    // this.httpClientService.get({
    //  fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data=> console.log(data));



