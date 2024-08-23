import { Component, OnInit } from '@angular/core';
import { CartsService } from '../../services/carts.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  constructor(private cartsService:CartsService, private router: Router,private route:ActivatedRoute){}
  data:any[]=[];
  products:any[]=[];
  buttonClicked:boolean = false;
  signupForm!: FormGroup;
  details={};
    ngOnInit()
    {
      
      console.log(this.data);
      this.signupForm = new FormGroup({
        start:new FormControl(''),
        end: new FormControl('')
      })
      this.buttonClicked =false;
      this.getAllCarts()
    }

    onSubmit() {
      if(!this.signupForm.valid)
      {
        this.buttonClicked = true;
      }
      else
      {
        this.cartsService.getAllCarts(this.signupForm.value).subscribe((val:any)=>{
          console.log(val);
          this.data = val;
        });
        this.buttonClicked = false; 
      }
    }
  
    getAllCarts()
    {
      this.cartsService.getAllCarts().subscribe((val:any)=>{
        this.data =val;
        console.log(val)
      });
    }

    Delete(id:number){
      this.cartsService.Delete(id).subscribe(val=>{
        console.log(val);
        this.getAllCarts()
        alert("Success")
      })
    }
    view(id:number,index:number){
      console.log(this.data[index]);
      this.cartsService.transferData.next(this.data[index]);
      this.router.navigate([id] ,{relativeTo:this.route})
    }
}
