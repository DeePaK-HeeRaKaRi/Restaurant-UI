import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from '../customer-services/cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private cartService:CartService,private productService:ProductService) { }

  ngOnInit(): void {
    this._getCartDetails()
  }
  
  deleteCartItem(){

  }
  _getCartDetails(){
    // this.cartService.cart$.pipe().subscribe( responseCart => {
    //   responseCart.items?.forEach(cartItem => {
    //     // console.log(cartItem)
    //     this.productService.getProducts(cartItem.productId).subscribe(product => {

    //     })
    //   })
    // })
  }
}
