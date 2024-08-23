import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
 
 @Input() title:string="";
 @Input() data:any[]= [];
 @Input() select ='';
 @Output() selection = new EventEmitter();
 detectChanges(event:any){
   this.selection.emit(event);
 }  
}
