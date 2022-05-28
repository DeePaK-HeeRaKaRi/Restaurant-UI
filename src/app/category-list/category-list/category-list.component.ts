import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/shared-models/category.model';
import { CategoryService } from '../../services/category.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categoryForm:FormGroup =new FormGroup({})
  isSubmitted:boolean=false
  editMode=false
  currentCategoryID =''
  constructor(private fb:FormBuilder,private categoryService:CategoryService,private Router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryForm=this.fb.group({
       name:['',Validators.required],
       icon:['',Validators.required]
    })

    this._checkEditMode()
  }
  onSubmit(){
      this.isSubmitted=true;
      if(this.categoryForm.invalid){
        return
      }
      const category:Category={
        id:this.currentCategoryID,
        name:this.categoryForm.controls['name'].value,
        icon:this.categoryForm.controls['icon'].value
      }
      if(this.editMode){
        this._updateCategory(category)
      }else{
        this._addCategory(category)
      }
     
  }
  _addCategory(category:Category){
    this.categoryService.postCategories(category).subscribe()
    window.alert('Category Added Sucessfully')
    this.Router.navigateByUrl('/category')
  }
  _checkEditMode(){
    this.activatedRoute.params.subscribe(params=>{
      // 'category-forms/:id' spparams['id']
      if(params['id']){
        this.editMode=true
        this.currentCategoryID=params['id']
        this.categoryService.updateCategories(params['id']).subscribe(data =>{
          this.categoryForm.controls['name'].setValue(data.name);
          this.categoryForm.controls['icon'].setValue(data.icon);
        })
      }
    })
  }

  _updateCategory(category:Category){
    this.categoryService.updateCategories(category).subscribe()
    window.alert('Category Updated Sucessfully')
    this.Router.navigateByUrl('/category')
  }
}
