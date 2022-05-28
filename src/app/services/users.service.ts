import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared-models/user.model';
import { Observable } from 'rxjs';
import { Form } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/api/v1/users')
  }
  getUserToUpdate(userId:String):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/api/v1/users/${userId}`)
  }
  getUsersByEmail(email:String):Observable<User>{
    return this.http.get<User>(`http://localhost:3000/api/v1/users/user-email/${email}`)
  }
  createUser(userFormData:User ){
    return this.http.post<User>('http://localhost:3000/api/v1/users',userFormData)
  }
  updateUser(user:User  ,userid:String):Observable<User>{
    return this.http.put<User>(`http://localhost:3000/api/v1/users/${userid}`,user)
  }
  deleteUser(userId:string):Observable<Object>{
    return this.http.delete<Object>(`http://localhost:3000/api/v1/users/${userId}`)
  }
  
}
