import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './component/about/about.component';
import { ProductComponent } from './component/product/product.component';
import { CustomerCardComponent } from './component/customer-card/customer-card.component';
import { CustomerDetailsComponent } from './component/customer-details/customer-details.component';
import { MainComponent } from './component/main/main.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HttpClientModule } from '@angular/common/http';
import { HeaderSComponent } from './component/header-s/header-s.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import {CardModule} from 'primeng/card';
import {MatCardModule} from '@angular/material/card';
import {ButtonModule} from 'primeng/button';
import { FooterComponent } from './component/footer/footer.component';
import { CustomersComponent } from './component/customers/customers.component';
import {AccordionModule} from 'primeng/accordion';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    CustomerCardComponent,
    CustomerDetailsComponent,
    MainComponent,
    HeaderSComponent,
    HomeComponent,
    ProductsComponent,
    FooterComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TabMenuModule,
    HttpClientModule,
    CardModule,
    MatCardModule,
    ButtonModule,
    AccordionModule,
    SlideMenuModule,
    MenubarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
