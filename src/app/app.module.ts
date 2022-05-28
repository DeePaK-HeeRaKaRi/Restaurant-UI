import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
// import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

import {MatPaginatorModule} from '@angular/material/paginator';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CategoryListComponent } from './category-list/category-list/category-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { OrderslistComponent } from './orders/orderslist/orderslist.component';
import { OrdersdetailComponent } from './orders/ordersdetail/ordersdetail.component';
import { TagModule } from 'primeng/tag';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
 
import {MatTreeModule} from '@angular/material/tree';
import { LoginComponent } from './pages/login/login.component';


import {MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { JwtInterceptorService } from './services/jwt-interceptor.service';

import {MatSidenavModule} from '@angular/material/sidenav';
import { UiBannerComponent } from './ui/ui-banner/ui-banner.component';
import { UiCategoryComponent } from './ui/ui-category/ui-category.component';
import { UiProductsComponent } from './ui/ui-products/ui-products.component';

 
import { CustomersUiComponent } from './Customers/customers-ui/customers-ui.component';
import { CustomersProductsComponent } from './Customers/customers-products/customers-products.component'

import {CartOrder } from './Customers/customer-services/orders.module'

import {MatBadgeModule} from '@angular/material/badge';
import { CartPageComponent } from './Customers/cart-page/cart-page.component';
import { SignupComponent } from './pages/signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    CategoryListComponent,
    ProductsFormComponent,
    ProductsListComponent,
    UsersListComponent,
    UsersFormComponent,
    OrderslistComponent,
    OrdersdetailComponent,
    LoginComponent,
    HomeComponent,
    UiBannerComponent,
    UiCategoryComponent,
    UiProductsComponent,
    CustomersUiComponent,
    CustomersProductsComponent,
    CartPageComponent,
    SignupComponent,
     
  ],
  imports: [
    // Input,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    TagModule,

    AccordionModule,
    // MenuItem
    MatTreeModule,

    MatGridListModule,
    MatSidenavModule,

    CartOrder,
    MatBadgeModule
    
     
     
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
