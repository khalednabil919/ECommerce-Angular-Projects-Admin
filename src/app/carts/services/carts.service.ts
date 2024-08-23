import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http:HttpClient) { }
  transferData= new BehaviorSubject<any>(null);
  getAllCarts(paramsObj?:any)
  {

    if(paramsObj)
    {
      let params = new HttpParams();
      params = params.append('startdate',paramsObj?.start).append('enddate',paramsObj?.end);
  
      return this.http.get(environment.baseUrl+'carts',{params});
    }
    return this.http.get(environment.baseUrl+'carts');

  }
  getSingleCart(id:number){
    return this.http.get(environment.baseUrl + 'carts/'+id);
  }
  Delete(id:number){
    return this.http.delete(environment.baseUrl+'carts/'+id);
  }

}
