import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Category } from '../shared-models/category.model'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {
  
  
  categoryList: Category[]=[];
  constructor(public categoryService:CategoryService,private router:Router,private Http:HttpClient) { }

  ngOnInit(): void {
     
    this.getCategory()
    
  }
  addnewCategory(){
    // this.router.navigateByUrl('category-forms')
    this.router.navigate(['/category-forms'])
  }
  getCategory(){
    this.categoryService.getCategories().subscribe((data)=>[
      this.categoryList=data
   ])
  }
  deleteCategory(list:any){

    if(window.confirm("Do You Really Want To Delete This Category")){
      this.categoryService.deleteCategories(list.id).subscribe((response)=>{
        window.alert("Deleted Successfully")
       this.getCategory()
      },((err)=>{console.log("Error in Deleting Category",err)}))
    }
      
  }
  updateCategory(list:any){
    this.router.navigate([`/category-forms/${list.id}`])
  }
  
  
}
