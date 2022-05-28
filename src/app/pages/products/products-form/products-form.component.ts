import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { of,map } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared-models/category.model';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared-models/product.model';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
 
export class ProductsFormComponent implements OnInit {
  editMode=false
  isSubmitted:boolean=false
  productForm:FormGroup =new FormGroup({})
  categoriesList:Category[]=[]
  url?:any
  // currentProductId?:string
  currentProductId=''
  constructor(private fb:FormBuilder,private CategoryService:CategoryService,private productService:ProductService,private Router:Router,private activatedRoute:ActivatedRoute) { }
   
  ngOnInit(): void {
      this.productForm=this.fb.group({
        name:['',Validators.required],
        brand:['',Validators.required],
        price:['',Validators.required],
        category:['',Validators.required],
        countInStock:['',Validators.required],
        description:['',Validators.required],
        richDescription:['Rich Description'],
        // image:['',Validators.required],
        image:[''],
        isFeatured:[false],
    })

    this._getCategories() 
    this._checkEditMode()
  }
  onSubmit(){
      this.isSubmitted=true
      if(this.productForm.invalid){
        console.log("the Form is Invalid")
        return
      }
      const productFormData=new FormData()
      Object.keys(this.productForm.controls).map((data)=>{
        console.log(data,this.productForm.controls[data].value)
        productFormData.append(data,this.productForm.controls[data].value)
      })
      console.log("ID",productFormData)
      if(this.editMode){
          this._updateProduct(productFormData)
      }else{
        this._addProducts(productFormData)
      }
      
      // const product:Product={
      //   // id:this. 
      //   name:this.productForm.controls['name'].value,
      //   brand:this.productForm.controls['brand'].value,
      //   price:this.productForm.controls['price'].value,
      //   category:this.productForm.controls['category'].value,
      //   countInStock:this.productForm.controls['countInStock'].value,
      //   description:this.productForm.controls['description'].value,
      //   richDescription:this.productForm.controls['richDescription'].value,
      //   // image:this.productForm.controls['image'].value,
      //   image:this.productForm.get('image')?.updateValueAndValidity(),
      //   isFeatured:this.productForm.controls['isFeatured'].value,
      // }
      // this._addProducts(product)
  }

  _addProducts(productFormData:FormData){
      this.productService.postProducts(productFormData).subscribe()
      window.alert('Product Added Sucessfully')
      this.Router.navigateByUrl('/products')
  }
  _getCategories(){
      this.CategoryService.getCategories().subscribe((data)=>{
          this.categoriesList=data
       })
  }
 
  onselectFile(e: any){
    if(e.target.files[0]){
      this.productForm.patchValue({image:e.target.files[0]})
      this.productForm.get('image')?.updateValueAndValidity()
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result
      }
    }
  }

  _checkEditMode(){
      this.activatedRoute.params.subscribe((params)=>{
        if(params['id']){
          this.editMode=true
          this.currentProductId=params['id']
          this.productService.getProductToUpdate(params['id']).subscribe((data)=>{
            this.productForm.controls['name'].setValue(data.name)
            this.productForm.controls['brand'].setValue(data.brand)
            this.productForm.controls['price'].setValue(data.price)
            this.productForm.controls['category'].setValue(data.category?.id)
            this.productForm.controls['countInStock'].setValue(data.countInStock)
            this.productForm.controls['isFeatured'].setValue(data.isFeatured)
            this.productForm.controls['description'].setValue(data.description)
            this.productForm.controls['richDescription'].setValue(data.richDescription)
            this.url=data.image
            // here in backend we have set that if the form has updated without the image we have to keep the older one without showing the errors. so in frontend we are removing the validators and updating the old image
            this.productForm.controls['image'].setValidators([])
            this.productForm.controls['image'].updateValueAndValidity()
          })
        }
      })
  }

  _updateProduct(productFormData:FormData){
    this.productService.updateProducts(productFormData,this.currentProductId).subscribe((data)=>{
      window.alert(`${data.name} Product Data Updated Successfully`)
      this.Router.navigateByUrl('/products')
    })
  }
}
 

