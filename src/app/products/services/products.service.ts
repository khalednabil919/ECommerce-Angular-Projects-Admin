import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
   data!:any;
   setProduct(data:any){
      this.data = data;
   }
   getProduct(){
    return this.data;
   }
  getAllProducts(){
    return this.http.get(environment.baseUrl + 'products');
  }
  getAllCategories(){
    return this.http.get(environment.baseUrl + 'products/categories' )
  }
  getProductsByCategory(name:string)
  {
    return this.http.get(environment.baseUrl + 'products/category/'+name);
  }
  getProductByID(id:number){
    return this.http.get(environment.baseUrl + 'products/'+id)
  }
  createProduct(model:any){
    return this.http.post(environment.baseUrl + 'products/', model);
  }
  updateProduct(model:any, id:number){
    return this.http.put(environment.baseUrl + 'products/'+id, model);
  }
}
