import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddCustomersComponent } from './component/add-customers/add-customers.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { CustomersComponent } from './component/customers/customers.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'products', //'products/:foodstuff'
    component: ProductsComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'addproducts',
    component: AddProductsComponent
  },
  {
    path: 'addcustomers',
    component: AddCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
