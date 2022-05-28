import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from '../services/auth-login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private authservice:AuthLoginService) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigateByUrl('/category')
  }
  category(){
    this.router.navigateByUrl('/category')
     
  }
  products(){
    this.router.navigateByUrl('/products')
     
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
