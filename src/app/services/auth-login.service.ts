import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared-models/user.model';
import { Observable } from 'rxjs';
import { LocalstorageService } from './localstorage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {

  constructor(private http:HttpClient,private token:LocalstorageService,private router:Router) { }

  login(email:string,passwordHash:string):Observable<User>{
      return this.http.post<User>(`http://localhost:3000/api/v1/users/login`,{email:email,passwordHash:passwordHash})
  }
  logout(){
      this.token.removeToken()
      this.router.navigateByUrl('/login')
  }
}
