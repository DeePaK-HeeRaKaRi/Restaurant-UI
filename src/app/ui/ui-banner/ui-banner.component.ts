import { Component, OnInit } from '@angular/core';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-ui-banner',
  templateUrl: './ui-banner.component.html',
  styleUrls: ['./ui-banner.component.scss']
})
export class UiBannerComponent implements OnInit {
  userName:any
  constructor(private authservice:AuthLoginService,private router:Router) { }

  ngOnInit(): void {
  //  this.getLogedInUser()
  }
  // getLogedInUser(){
  //   this.authservice.login()
  // }
  logout(){
    this.authservice.logout()
    window.alert("Logged Out Successfully")
    this.router.navigateByUrl('/login')
  }
   
}
