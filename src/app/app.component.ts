import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
// import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EticaretClient';
  constructor(){
    // // this.toastrService.warning("Başarılı şekilde oluşturuldu","Sipariş");
    // toastrService.message("Sipariş ali alındı", "Sipariş", {
    //   messageType: ToastrMessageType.Success,
    //   position: ToastrPosition.BottomCenter

    // })
    // toastrService.message("Sipariş ibo alındı", "Sipariş",{
    //   messageType: ToastrMessageType.Error,
    //   position: ToastrPosition.TopFullWidth
    // })
    // toastrService.message("Sipariş samet alındı", "Sipariş",{
    //   messageType:ToastrMessageType.Info,
    //   position: ToastrPosition.BottomLeft
    // } )

  }
}
// $(document).ready(()=>{
//   alert("Merhaba")
// })

