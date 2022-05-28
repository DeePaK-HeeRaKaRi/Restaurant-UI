import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart';

export const CART_KEY ='cart'
@Injectable({
  providedIn: 'root'
})
export class CartService {


  cart$ :BehaviorSubject<Cart> =new BehaviorSubject(this.getCart())
  constructor() { }
  initCartLocalStorage(){
    const cart : Cart =this.getCart()
    // here this is checking if their is any cart in localstorage,if their is no cart cretae a cart 
    // if user is loged in again in the localstorage it will exist
    if(!cart){
      const initialCart ={
        items:[]
      }
      const initialCartJson=JSON.stringify(initialCart)
      localStorage.setItem(CART_KEY,initialCartJson)
    }
    // else{
    //   this.cart$.next(cart)
    // }
   
  }

  getCart():Cart {
     // to get the current item And push to the cart
      const cartJsonString:any =localStorage.getItem(CART_KEY)
      const cart: Cart =JSON.parse(cartJsonString)
      return cart
  }
  setCartItem(cartItem :CartItem):Cart {
   
    // const cart  :Cart =JSON.parse(localStorage.getItem(CART_KEY) || '{}')
    const cart =this.getCart()
    const cartItemsExist =cart.items?.find((item)=>item.productId === cartItem.productId)
    if(cartItemsExist){
      cart.items?.map((item )=> {
        if(item.productId === cartItem.productId){
          item.quantity =item.quantity + cartItem.quantity
          // return item
        }
      })
    }else{
       // now push the cartitem 
      cart.items?.push(cartItem)
    }
    const cartJSON =JSON.stringify(cart)
    // here again pushing back to local storage
    localStorage.setItem(CART_KEY,cartJSON)
    // it will update the cart dynamically
    this.cart$.next(cart)
    window.alert("Product Added To The Cart Successfully")
    return cart
   
  }
}
