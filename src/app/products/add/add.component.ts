import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private fb:FormBuilder,private ds:DataService,private rout:Router){}

  //model form for add product
  addFormModel = this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]+')]],
    productName:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    price:['',[Validators.required,Validators.pattern('[0-9]+')]],
    description:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    productImg:['',[Validators.required,Validators.pattern('[0-9a-zA-z/.:-_]+')]],
    quantity:['',[Validators.required,Validators.pattern('[0-9a-zA-Z ]+')]],
    vendor_name:['',[Validators.required,Validators.pattern('[0-9a-zA-Z .,]+')]],
    categoryId:['',[Validators.required,Validators.pattern('[0-9]+')]],
    is_available:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
    rating:['',[Validators.required,Validators.pattern('[0-9]+')]],
    review:['',[Validators.required,Validators.pattern('[0-9]+')]]
  })
  addproduct(){

    const path=this.addFormModel.value
    let productData={
      id:path.id,
      productName:path.productName,
      price:path.price,
      description:path.description,
      productImg:path.productImg,
      quantity:path.quantity,
      vendor_name:path.vendor_name,
      categoryId:path.categoryId,
      is_available:path.is_available,
      rating:path.rating,
      review:path.review
    }
    if(this.addFormModel.valid){
      this.ds.addProduct(productData).subscribe({
        next:(result:any)=>{
          console.log(result);
          
          alert('New Product Added')
          this.rout.navigateByUrl("")
        }
      })
    }
    else{
      alert('please fill the form')
    }




  }
}
