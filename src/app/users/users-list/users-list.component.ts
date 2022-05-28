import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared-models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  usersList:User[]=[]
  constructor(private router:Router,private usersService:UsersService) { }
 
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.usersService.getUsers().subscribe((data)=>{
      this.usersList=data
    })
  }
  updateUser(userid:any){
    this.router.navigateByUrl(`/users-form/${userid}`)
  }
  deleteUser(userid:any,isAdmin:any){
    // if(isAdmin==true){
      if(window.confirm("Are you Want To Delete This User")){
        this.usersService.deleteUser(userid).subscribe((data)=>{
            window.alert("User is Successfully Deleted")
            this.getUsers()
          })
        }
    // }else{
    //   window.alert("You Are Not Supported To Delete")
    // }
    
  }
  addnewUser(){
    this.router.navigateByUrl(`/users-form`)
  }
}
