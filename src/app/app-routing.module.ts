import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { CartDetailsComponent } from './carts/components/cart-details/cart-details.component';
import { AddProductComponent } from './products/components/add-product/add-product.component';

const routes: Routes = [
  {path:"products", component: AllProductsComponent},
  {path:"products/add", component: AddProductComponent},
  {path:"products/update", component: AddProductComponent},
  {path:"details/:id", component:ProductDetailsComponent},
  {path:"cart", component: CartComponent},
  {path:"cart/:id",component:CartDetailsComponent},
  {path:"**",redirectTo:"cart",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
