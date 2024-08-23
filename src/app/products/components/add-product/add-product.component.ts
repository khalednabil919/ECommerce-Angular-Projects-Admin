import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { read } from 'fs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})

export class AddProductComponent implements OnInit{
  constructor(private productService:ProductsService, private builder:FormBuilder,
              private router:Router, private route: ActivatedRoute
  ){}
  categories:any[]=[];
  base64:any='';
  form!:FormGroup;
  categoryName:string= '';
  isSubmitted:boolean = false;
  lastSegment:string='';
  data!:any;
  AddOrUpdate:string='';
  // for update
  title:string='';
  description:string='';
  price:number=0;
  image:string='';
  category:string='';
  //
  ngOnInit()
  {

    this.data = this.productService.getProduct();
    this.form = this.builder.group({
      title: ['',Validators.required],
      price: ['',Validators.required],
      description: ['',Validators.required],
      image: ['',Validators.required],
      category: ['',Validators.required]
    })
    this.productService.getAllCategories().subscribe((val:any)=>{
      this.categories = val;
    })

    const urlSegments = this.route.snapshot.url;
    this.lastSegment = urlSegments[urlSegments.length - 1].path;
   if(this.lastSegment ==='update')
   {
     console.log(this.lastSegment);
     this.setDataToForm(this.data);
     this.AddOrUpdate = 'Update';
   }
   else{
      this.AddOrUpdate = 'Add'
   }
  }
  setDataToForm(data:any){
    console.log(data.category);
    this.form.get('title')?.setValue(data.title);
    this.form.get('description')?.setValue(data.description);
    this.form.get('category')?.setValue(data.category);
    this.form.get('price')?.setValue(data.price);
    this.form.get('image')?.setValue(data.image);
    this.base64 =data.image

    this.title = this.form.get('title')?.value;
    this.description = this.form.get('description')?.value;
    this.category = this.form.get('category')?.value;
    this.image = this.form.get('image')?.value;
    this.price = this.form.get('price')?.value;
    
  }
  getCategory(event:any){
    this.categoryName= event.target.value;
    this.form.get('category')?.setValue(this.categoryName);
    console.log(this.categoryName);
    // this.isSubmitted = true;
  }
  getImagePath(event:any){
    const file =event.target.files[0];
    const reader =new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      this.base64 = reader.result;
      this.form.get('image')?.setValue('this.base64');
    }
  }
  Back(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  UpdateOrAdd(){
    if(this.AddOrUpdate === 'Add')
    {
      this.addProduct()
      return;
    }
    this.updateProduct();

  }
  addProduct(){
    console.log(this.form.value);
    this.productService.createProduct(this.form.value).subscribe(val=>
    {
      alert('success')
      console.log(val);
    }
    );
    this.isSubmitted = true;
  }
  updateProduct()
  {
    console.log(1111);
    this.productService.updateProduct(this.form.value,this.data.id).subscribe(val=>
      {
        alert('success')
        console.log(val);
      }
      );
      this.isSubmitted = true;
  }
}
