import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AddCustomersComponent } from './component/add-customers/add-customers.component';
import { AddProductsComponent } from './component/add-products/add-products.component';
import { CustomersComponent } from './component/customers/customers.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { LogInComponent } from './component/log-in/log-in.component';

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
  },
  {
    path: 'logIn',
    component: LogInComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
