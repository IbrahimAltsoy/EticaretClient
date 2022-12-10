import { Component } from '@angular/core';
import { AlertifyOptions, AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService){}
  ngOnInit(): void {
    // alertify.error("Başarılı bir şekilde ekledni!");


}
tikla(){
  this.alertify.message("Başarılı kayıt yapıldı", {
    messageType: MessageType.Success,
    position :Position.TopRight,
    delay: 7,
    dismissOthers:false

  })
}
sil(){
  this.alertify.dismiss();
}

}

