import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared-models/order.model';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';
import { OrderStatus } from 'src/app/shared-models/order-status.model';
@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.scss']
})
export class OrderslistComponent implements OnInit {
  orders:Order[]=[]
  orderStatus:any=OrderStatus
  constructor(private ordersService:OrdersService,private Router:Router) { }

  ngOnInit(): void {
    this._getOrders()
  }
  _getOrders(){
      this.ordersService.getOrders().subscribe((data)=>{
        this.orders=data
      })
  }
  deleteOrder(list:any){

  }
  showOrder(listid:any){
      this.Router.navigateByUrl(`orders/${listid}`)
  }
}
