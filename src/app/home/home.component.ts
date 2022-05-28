import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  navigateTo=''
  constructor(private router:Router,private authservice:AuthLoginService) { }

  ngOnInit(): void {
  }
  category(){
    this.router.navigateByUrl('/category')
    this.navigateTo="Category"
  }
  products(){
    this.router.navigateByUrl('/products')
    this.navigateTo="Products"
  }
  orders(){
    this.router.navigateByUrl('/orders')
  }
  users(){
    this.router.navigateByUrl('/users')
  }
  logout(){
    this.authservice.logout()
  }
}
