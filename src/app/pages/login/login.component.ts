import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  loginForm: FormGroup =new FormGroup({})
  isSubmitted=false
  authError=false
  SECRET_ADMIN="deepu@123#"
  authMessage='Email or Password Is Wrong'
  constructor(private fb:FormBuilder,private AuthLoginService:AuthLoginService,private LocalstorageService:LocalstorageService,private router:Router,private  UsersService: UsersService) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      passwordHash:['',Validators.required]
   })
  }
  onSubmit(){
    this.isSubmitted=true
    if(this.loginForm.invalid){ 
      return
    }
    const loginData={
      email:this.loginForm.controls['email'].value,
      passwordHash:this.loginForm.controls['passwordHash'].value,
    }
    this.AuthLoginService.login(loginData.email,loginData.passwordHash).subscribe((data:any)=>{
      this.authError=false
      this.LocalstorageService.setToken(data.token)
      this.UsersService.getUsersByEmail(loginData.email).subscribe((useremail)=>{
        console.log("useremail",useremail.isAdmin)
        const logedinUserName=useremail.name
        // If user is admin he will redirect to the admin page else redirect to customers page
        if(useremail.isAdmin && useremail.secret===this.SECRET_ADMIN){
          this.router.navigateByUrl('/category')
          window.alert(`Successfully Logged In As Admin`)
        }else{
          this.router.navigateByUrl('/customers/ui')
          window.alert(`Successfully Logged In As Customer`)
        }
      })
    },(error:HttpErrorResponse)=>{
      console.log(error)
      this.authError=true;
      if(error.status !== 200){
        this.authMessage="Error In The Server,please try again";
        window.alert("Error in server, please try again later")
      }
    })
  }

   getLoggedInUser(){
     return this['logedinUserName']
   }
  
}
