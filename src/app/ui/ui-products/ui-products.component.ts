import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared-models/product.model';
 
@Component({
  selector: 'app-ui-products',
  templateUrl: './ui-products.component.html',
  styleUrls: ['./ui-products.component.scss']
})
export class UiProductsComponent implements OnInit {
  featuredProducts:Product[]= []

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {

    this.ProductService.getFeaturedProducts(4).subscribe((data)=>{
      this.featuredProducts=data
    })
  }
  

}
