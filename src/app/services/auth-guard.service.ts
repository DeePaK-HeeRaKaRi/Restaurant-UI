import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { Router } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router,private LocalstorageToken:LocalstorageService) { }
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    const token=this.LocalstorageToken.getToken()
    if(token){
      // here we will get the admin whethet true or false using payload
      const tokenDecode =JSON.parse(atob(token.split('.')[1]))
      console.log("tokendecode",tokenDecode)
       
      if(tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp)){
        return true
      }
    }
    this.router.navigateByUrl('/login')
    return false
  }
  _tokenExpired(expiration: number):boolean{
    return Math.floor(new Date().getTime()/1000) >= expiration
  }
}


// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true


// The atob() method decodes a base-64 encoded string.

// The atob() method is not supported in IE9 and earlier.

// Encoded: SGVsbG8gV29ybGQh
// Decoded: Hello World!