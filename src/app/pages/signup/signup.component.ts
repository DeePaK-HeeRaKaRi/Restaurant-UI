import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/shared-models/user.model';

@Component({
  selector: 'users-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userForm:FormGroup= new FormGroup ({})
  isSubmitted:boolean=false
  currentUserId=''
  constructor(private fb:FormBuilder,private  usersService: UsersService,private router:Router) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern("^[a-zA-z ]+$")]],
      email:['',[Validators.required,Validators.email]],
      // passwordHash:['',[Validators.required,Validators.email]],
      passwordHash:['',Validators.required],
      secret:[''],
      phone:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      street:[''],
      apartment:[''],
      city:[''],
      zip:[''],
      isAdmin:[false],
      country:['India']
    })
  }

  onSubmit(){
    this.isSubmitted=true
    if(this.userForm.invalid){
      window.alert("Form Is Invalid")
      return
    }
    const users:User={
      id: this.currentUserId,
      name: this.userForm.controls['name'].value,
      email: this.userForm.controls['email'].value,
      passwordHash: this.userForm.controls['passwordHash'].value,
      secret:this.userForm.controls['secret'].value,
      phone: this.userForm.controls['phone'].value,
      isAdmin: this.userForm.controls['isAdmin'].value,
      street: this.userForm.controls['street'].value,
      apartment: this.userForm.controls['apartment'].value,
      zip: this.userForm.controls['zip'].value,
      city: this.userForm.controls['city'].value,
      country:this.userForm.controls['country'].value
    }
    console.log("usersss",users)
     
    this._addUsers(users)
    
  }
  _addUsers(userFormData:User){
    this.usersService.createUser(userFormData).subscribe()
    window.alert("User Added Successfully")
    this.router.navigateByUrl('/login')
    // console.log(userFormData)
}
}
