import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
 
import { Category } from '../shared-models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   
  constructor(private http:HttpClient) { }
 
   getCategories():Observable<Category[]>{
     return this.http.get<Category[]>('http://localhost:3000/api/v1/categories')
   }
   
   postCategories(category:Category){
      return this.http.post<Category>('http://localhost:3000/api/v1/categories',category)
   }
   
   deleteCategories(categoryId:string):Observable<Object>{
    return this.http.delete<Object>(`http://localhost:3000/api/v1/categories/${categoryId}`)
  }
  
  updateCategories(category:any):Observable<Category>{
    return this.http.put<Category>(`http://localhost:3000/api/v1/categories/${category.id}`,category)
  }
}
