import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  constructor(private route: ActivatedRoute, private productService:ProductsService){}
  id:number = 0 ;
  obj:any;
  appear:boolean=false;
  ngOnInit()
  {
    this.appear = true;
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductByID(this.id).subscribe((val:any)=>{
      this.appear =false;
      this.obj = val;
    },error=>{
      console.log(error)
    })
  }
  
}
