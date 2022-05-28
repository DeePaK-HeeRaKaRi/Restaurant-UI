import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import  { Order } from  '../shared-models/order.model'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>('http://localhost:3000/api/v1/orders')
  }
  getOrder(orderId:String):Observable<Order>{
    return this.http.get<Order>(`http://localhost:3000/api/v1/orders/${orderId}`)
  }
  postOrders(order: Order){
     return this.http.post< Order>('http://localhost:3000/api/v1/orders',order)
  }
  
  deleteOrders(orderId:string):Observable<Object>{
   return this.http.delete<Object>(`http://localhost:3000/api/v1/orders/${orderId}`)
 }
 
 updateOrders(order:any):Observable<Order>{
   return this.http.put< Order>(`http://localhost:3000/api/v1/orders/${order.id}`,order)
 }

}
