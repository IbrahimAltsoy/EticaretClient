import { Directive, ElementRef, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { ProductService } from 'src/app/services/common/models/product.service';
import {EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';


declare var $:any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService,
    private spinner: NgxSpinnerService,
    public dialog: MatDialog

  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor: pointer");
    img.width =25;
    img.height= 25;
    _renderer.appendChild(element.nativeElement, img)
   }
   @Input() id: string;
   @Output() callback :EventEmitter<any> = new EventEmitter();
   @HostListener("click")
   async onclick(){
    this.openDialog(async()=>{

     this.spinner.show(SpinnerType.BallScaleMultiple);
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.productService.delete(this.id);
    $(td.parentElement).animate({
      opacity: 0,
      left:"+=50",
      height: "toogle"
    }, 1000, ()=>{
      this.callback.emit();
    })





  });
    // 42

   }
   openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '400px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==DeleteState.Yes){
        afterClosed();
      }
    });
  }

}

