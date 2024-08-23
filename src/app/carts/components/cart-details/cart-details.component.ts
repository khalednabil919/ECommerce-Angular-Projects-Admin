import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../../products/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.scss'
})
export class CartDetailsComponent implements OnInit,OnDestroy{
 constructor(private cartService:CartsService,private productService: ProductsService, private router:ActivatedRoute){}
  
  products:any[]=[];
  subscription1!:Subscription;
  subscription2!:Subscription;
  subscription3!:Subscription;
  id:number = 0;
ngOnInit()
 {
    this.subscription2 = this.router.params
    .subscribe(
      (params:Params)=>{
        this.id = +params['id'];
      }
    );

    this.subscription3 = this.cartService.getSingleCart(this.id).subscribe((val:any)=>{
      for(let i of val.products)
        {
          this.subscription1 = this.productService.getProductByID(i.productId).subscribe(x=>{
            this.products.push({item:x, quantity:i.quantity})
          })
        }
    })
  }

  ngOnDestroy()
  {
  this.subscription1.unsubscribe();
  this.subscription2.unsubscribe();
  this.subscription3.unsubscribe();
  }
}
