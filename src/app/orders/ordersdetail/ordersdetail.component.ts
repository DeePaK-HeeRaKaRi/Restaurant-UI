import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared-models/order.model';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { OrderStatus } from 'src/app/shared-models/order-status.model';
@Component({
  selector: 'app-ordersdetail',
  templateUrl: './ordersdetail.component.html',
  styleUrls: ['./ordersdetail.component.scss']
})
export class OrdersdetailComponent implements OnInit {
  orderList?: Order
  OrderStatuses=[]
  constructor(private OrderService:OrdersService,private ActivatedRouted:ActivatedRoute) { }

  ngOnInit(): void {
    this._OrderStatus()
    this._getOrder()
  }
  _OrderStatus(){
    // Object.keys(OrderStatus).map((key)=>{
    //   console.log(OrderStatus?[key[label]]);
    //   // [index: string]:any
    // })
    // console.log( Object.keys(OrderStatus))
    // console.log( OrderStatus[0])
    for(let i=0;i<=4;i++){
      console.log(OrderStatus[0].label)
    }
  }
  _getOrder(){
    this.ActivatedRouted.params.subscribe((paramsid)=>{
      if(paramsid['id']){
        this.OrderService.getOrder(paramsid['id']).subscribe((data)=>{
            this.orderList=data
        })
      }
    })
  }

  getMultipliedValue(price:any, quantity:any) {
    return price * quantity;
  }

}
