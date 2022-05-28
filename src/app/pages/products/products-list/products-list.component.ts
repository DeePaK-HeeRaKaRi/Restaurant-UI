import { Component, OnInit } from '@angular/core';
import { Product } from '../../../shared-models/product.model';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productList:Product[]=[]
  searchList:Product[]=[]
  temp:Product[]=[]
  flag:boolean=false
  totalProductList:any
  searchName:any
  searchFun:FormGroup =new FormGroup({})
  constructor(private router:Router,private productService:ProductService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this._getProducts()
    this.TotalProductsList()
  }
  TotalProductsList(){
    this.productService.getTotalProductsList().subscribe((data)=>{
      console.log("getTotalProductsList()",data)
      this.totalProductList=data
    })
  }
  addnewProduct(){
      this.router.navigateByUrl('products-form')
  }
  search(x:any){
    this.searchList=[]
    this.searchName=x.target.value
    console.log('searchName',this.searchName)
    var e=this.searchName
    this.temp.forEach(element => {
      let c=element.name
      if (c?.toLowerCase().includes(e.toLowerCase())){
          console.log('search function find',element)
          this.searchList.push(element)
      }
    });
    this.productList=[]
  }

  _getProducts(){
    this.flag=true
    this.productService.getProducts().subscribe((data)=>{
      this.productList=data
      this.temp=data
    })
  }

  updateProduct(list:any){
    this.router.navigateByUrl(`products-form/${list.id}`)
  }
  deleteProduct(list: any){
      if(window.confirm("Do you Really Want to Delete This Product?")){
        this.productService.deleteProducts(list).subscribe((data)=>{
          window.alert(`Product Has Been Deleted Successfully`)
          this._getProducts()
        })
        
      }
  }

}
