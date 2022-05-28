import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared-models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared-models/category.model';
import { CartService } from '../customer-services/cart.service';
import { CartItem } from '../models/cart';

 
@Component({
  selector: 'app-customers-products',
  templateUrl: './customers-products.component.html',
  styleUrls: ['./customers-products.component.scss']
})
 
export class CustomersProductsComponent implements OnInit {
   

  productsList:Product[]= []
   
  categoryList:Category[]=[]
  data: any;
  cartCount:any =0
  constructor(private ProductService:ProductService,private CategoryService :CategoryService,private CartService:CartService ) { }

  ngOnInit(): void {
    
    this._getProducts()
    this.CategoryService.getCategories().subscribe((data)=>{
      this.categoryList =data
    })
    
    this.CartService.cart$.subscribe(cart => {
      // if it is undefined return the zero
      this.cartCount=cart.items?.length ?? 0
    })
    // this.cartCount = this.CartService.getCart().items?.length
  }
  private _getProducts(categoriesFilter?: string[]){
    this.ProductService.getProducts(categoriesFilter).subscribe((data)=>{
      this.productsList=data
    })
  }
  
  categoryFilter(){
    const selectedCategories:any=this.categoryList
    .filter((category) => category.checked)
    .map((category)=>category.id)
    // console.log(selectedCategories)
    this._getProducts(selectedCategories)
  }
  
  addProductToCart(product:any){
    this.ProductService.getProductToUpdate(product.id).subscribe((data)=>{
      // console.log("productid",data.id)
      const productid=data.id
      const cartItem :CartItem ={
        productId:productid,
        quantity:1
      }
      this.CartService.setCartItem(cartItem)
    })
  }
}
