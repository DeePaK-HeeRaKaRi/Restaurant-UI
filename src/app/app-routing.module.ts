import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryListComponent } from './category-list/category-list/category-list.component';
import { CategoryComponent } from './category/category.component';
import { CartPageComponent } from './Customers/cart-page/cart-page.component';

import { CustomersProductsComponent } from './Customers/customers-products/customers-products.component';
import { CustomersUiComponent } from './Customers/customers-ui/customers-ui.component';

import { HomeComponent } from './home/home.component';

import { OrdersdetailComponent } from './orders/ordersdetail/ordersdetail.component';
import { OrderslistComponent } from './orders/orderslist/orderslist.component';

import { LoginComponent } from './pages/login/login.component';

import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { SignupComponent } from './pages/signup/signup.component';

import { AuthGuard } from './services/auth-guard.service';

import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersListComponent } from './users/users-list/users-list.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  // {
  //   path:'',
  //   component:HomeComponent,
  //   canActivate:[AuthGuard]},
    // children:[
       
      {path:'category',component:CategoryComponent,canActivate:[AuthGuard]},
      {path:'category-forms',component:CategoryListComponent,canActivate:[AuthGuard]},
      {path:'category-forms/:id',component:CategoryListComponent,canActivate:[AuthGuard]},
  
      {path:'products',component:ProductsListComponent,canActivate:[AuthGuard]},
      {path:'products-form',component:ProductsFormComponent,canActivate:[AuthGuard]},
      {path:'products-form/:id',component:ProductsFormComponent,canActivate:[AuthGuard]},
  
      {path:'users',component:UsersListComponent,canActivate:[AuthGuard]},
      {path:'users-form',component:UsersFormComponent,canActivate:[AuthGuard]},
      {path:'users-form/:id',component:UsersFormComponent,canActivate:[AuthGuard]},
  
      {path:'orders',component:OrderslistComponent,canActivate:[AuthGuard]},
      {path:'orders/:id',component:OrdersdetailComponent,canActivate:[AuthGuard]},


      {path:'customers/ui',component:CustomersUiComponent},
      {path:'customers/products',component:CustomersProductsComponent},

      {path:'cart',component:CartPageComponent},
      {path:'users/signup',component:SignupComponent},

      { path: '**', redirectTo: '' }
  //   ]
  // },
];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
