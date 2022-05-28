import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared-models/user.model';
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  userForm:FormGroup= new FormGroup ({})
  editMode:boolean=false
  isSubmitted:boolean=false
  currentUserId=''
  constructor(private fb:FormBuilder,private router:Router,private  activatedRoute : ActivatedRoute ,private  usersService: UsersService) { }

  ngOnInit(): void {
    this.userForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      // passwordHash:['',[Validators.required,Validators.email]],
      passwordHash:['',Validators.required],
      phone:['',Validators.required],
      street:[''],
      apartment:[''],
      city:[''],
      zip:[''],
      isAdmin:[false],
      country:['India']
    })

    this._checkEditMode()
  }
  onSubmit(){
    this.isSubmitted=true
    if(this.userForm.invalid){
      window.alert("Form Is Invalid")
      return
    }
    // const userFormData=new FormData()
    // Object.keys(this.userForm.controls).map((data)=>{
    //   // console.log(data,this.userForm.controls[data].value)
    //   userFormData.append(data,this.userForm.controls[data].value)
    // })
    // console.log("userformdata",this.userFormData)
    const users:User={
      id: this.currentUserId,
      name: this.userForm.controls['name'].value,
      email: this.userForm.controls['email'].value,
      passwordHash: this.userForm.controls['passwordHash'].value,
      phone: this.userForm.controls['phone'].value,
      isAdmin: this.userForm.controls['isAdmin'].value,
      street: this.userForm.controls['street'].value,
      apartment: this.userForm.controls['apartment'].value,
      zip: this.userForm.controls['zip'].value,
      city: this.userForm.controls['city'].value,
      country:this.userForm.controls['country'].value
    }
    console.log("usersss",users)
    if(this.editMode){
      this._updateUsers(users)
    }else{
      this._addUsers(users)
    }
  }
  userFormData(userFormData: any) {
    throw new Error('Method not implemented.');
  }
  
  _updateUsers(userFormData:User){
      this.usersService.updateUser(userFormData,this.currentUserId).subscribe((data)=>{
        this.router.navigateByUrl('/users')
      })

  }
    
  _addUsers(userFormData:User){
      this.usersService.createUser(userFormData).subscribe()
      window.alert("User Added Successfully")
      this.router.navigateByUrl('/users')
      // console.log(userFormData)
  }
  

  _checkEditMode(){
    this.activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.editMode=true
        this.currentUserId=params['id']
        this.usersService.getUserToUpdate(params['id']).subscribe((data)=>{
          this.userForm.controls['name'].setValue(data.name)
          this.userForm.controls['email'].setValue(data.email)
          this.userForm.controls['phone'].setValue(data.phone)
          this.userForm.controls['street'].setValue(data.street)
          this.userForm.controls['apartment'].setValue(data.apartment)
          this.userForm.controls['city'].setValue(data.city)
          this.userForm.controls['zip'].setValue(data.zip)
          this.userForm.controls['isAdmin'].setValue(data.isAdmin)
          this.userForm.controls['country'].setValue(data.country)
          // here in backend we have set that if the form has updated without the passwordHash we have to keep the older one without showing the errors. so in frontend we are removing the validators and updating the old image
          this.userForm.controls['passwordHash'].setValidators([])
          this.userForm.controls['passwordHash'].updateValueAndValidity()
        })
      }
    })
  }

 
}
