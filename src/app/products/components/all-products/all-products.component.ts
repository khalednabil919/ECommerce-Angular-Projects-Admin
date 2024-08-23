import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { productWithAmount } from '../../../models/ProductWithAmount';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{

  products :Product[] = [];
  categories :string[] = [];
  cart:any[]=[];
  loading:boolean = false;
  ngOnInit()
  {
    this.getProducts();
    this.getCategories();
  }
  constructor(private service:ProductsService,private router:Router, private activateRoute:ActivatedRoute ){}
 
  getProducts(){
    this.loading = true;
    console.log(this.loading);
    this.service.getAllProducts().subscribe((res:any)=>{
      this.loading = false;
      console.log(this.loading);
      this.products = res;
      console.log(res);
    },   error=>{
      console.log(error);
      this.loading = false;
      alert(error)
    })
  }
  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories = res;
    }, error=>{
      console.log(error);
      alert(error);
    })
  }

  AddProduct(){
    this.router.navigate(["add"], {relativeTo:this.activateRoute})
  }

  Update(data:any){
    this.service.setProduct(data);
    this.router.navigate(["update"], {relativeTo:this.activateRoute})
    
  }

}
