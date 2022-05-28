import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Product } from '../shared-models/product.model';
import { Observable,map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProducts(categoriesFilter?: string[]):Observable<Product[]>{
    let paramsToPass=new HttpParams()
    if(categoriesFilter){
      paramsToPass =paramsToPass.append('categories',categoriesFilter.join(','))
      console.log("categoryparams",paramsToPass)
    }
    return this.http.get<Product[]>('http://localhost:3000/api/v1/products',{ params : paramsToPass})
  }
  
  getProductToUpdate(productId:String):Observable<Product>{
    return this.http.get<Product>(`http://localhost:3000/api/v1/products/${productId}`)
  }
  updateProducts(productData:FormData,productid:String):Observable<Product>{
    return this.http.put<Product>(`http://localhost:3000/api/v1/products/${productid}`,productData)
  }
  postProducts(productFormData:FormData){
     return this.http.post<Product>('http://localhost:3000/api/v1/products',productFormData)
  }
  
  deleteProducts(productId:string):Observable<Object>{
    // http://localhost:3000/api/v1/products/61d52028d3e926ad94005dde
   return this.http.delete<Object>(`http://localhost:3000/api/v1/products/${productId}`)
 }
 

 getFeaturedProducts(count:Number):Observable<Product[]>{
   return this.http.get<Product[]>(`http://localhost:3000/api/v1/products/get/featured/${count}`)
 }
 

 getTotalProductsList():Observable<Object>{
   return this.http.get<Object>(`http://localhost:3000/api/v1/products/get/countList`)
 }
}
