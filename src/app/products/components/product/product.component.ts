import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { productWithAmount } from '../../../models/ProductWithAmount';
import { Router } from '@angular/router';
import { Product } from '../../models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
@Input() item!:Product;
disable:boolean = false;
amount:number = 0 ;
@ViewChild("amount1") child!:ElementRef<HTMLInputElement>;
constructor(private router:Router){}
@Output() itemSelected = new EventEmitter();

addToCart(){
  console.log(this.amount)
  this.disable = false;
  if(this.child.nativeElement.valueAsNumber <=0)
  {
    alert('value is grater than 0 is permitted only!')
    return;
  }
  this.itemSelected.emit({item:this.item, quantity:this.amount});
  this.amount = 0 ;
 }
 route(item:number){
  this.router.navigate(['details/'+item])
}
}
