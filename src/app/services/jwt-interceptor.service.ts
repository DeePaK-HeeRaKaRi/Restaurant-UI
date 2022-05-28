import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { request } from 'http';
import { LocalstorageService } from './localstorage.service';
@Injectable({
  providedIn: 'root'
})
// httpintrceptor wil send the token to backend
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private localstoragetoken:LocalstorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token=this.localstoragetoken.getToken()
    const isAPIUrl=req.url.startsWith('http://localhost:3000/api/v1/')
    if(token && isAPIUrl){
      req=req.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      })
    }
    return next.handle(req)
  }
}
