import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Create_Product } from 'src/app/contracts/create_product';
import { List_Product } from 'src/app/contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private httpClientService: HttpClientService) { }

  create(product: Create_Product, successCallBack?:()=>void, errorCallBack?:(errorMessage:string)=>void){
    this.httpClientService.post({
      controller:"products"
    },product).subscribe(result=>{
      successCallBack();
// validation kodlarıdır
    },(errorResponse:HttpErrorResponse)=>{
      const _error:Array<{key: string, value:Array<string>}> = errorResponse.error;
      let message = "";
      _error.forEach((v,index)=>{
        v.value.forEach((_v, _index)=>{
          message+= `${_v}<br>`;

        });
      });
      errorCallBack(message);
      // debugger;

    });

  }


  // Listeleme metodu
  async read(page: number=0, size: number=5,successCallBack?: ()=>void, errorCallBack?:(errorMessage:string)=>void):Promise<{totalCount: number; products :List_Product[]}>{
    const promiseData:Promise<{totalCount: number; products :List_Product[]}>= this.httpClientService.get<{totalCount: number; products :List_Product[]}>({
      controller :"products",
      querystring: `page=${page}&size=${size}`
    }).toPromise();

    promiseData.then(d=>successCallBack())
    .catch((errorResponse: HttpErrorResponse)=>errorCallBack(errorResponse.message))

    return await promiseData;
  }

  async delete(id:string){
   const deleteObservable: Observable<any>= this.httpClientService.delete<any>({
      controller: "products",
    },id);
    await firstValueFrom(deleteObservable);

  }
}



// this.productService.create(create_product, () => {
//   this.hideSpinner(SpinnerType.BallScaleMultiple);
//     this.alertify.message("Fiyat negatif ve boş geçilemez",{
//       dismissOthers: true,
//       messageType: MessageType.Success,
//       position: Position.TopRight
//     });
//   }, errorMessage =>{
//     this.alertify.message(errorMessage,
//       {
//         dismissOthers:true,
//         messageType: MessageType.Error,
//         position: Position.TopRight

//       });
//   });
