import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent {
id:any
pdata:any={}

constructor(private ds:DataService,private ar:ActivatedRoute,private rout:Router){}

ngOnInit():void{
this.ar.params.subscribe((data:any)=>{
this.id=data.id
console.log(this.id)
})

this.ds.getProduct(this.id).subscribe({
  next:(result:any)=>{
    this.pdata=result
    console.log(this.pdata);
    
  }
})



}

deleteProduct(){
  this.ds.removeProduct(this.id).subscribe({
    next:(result:any)=>{
      alert(`Are you sure! Do you want to delete this item`)
      this.rout.navigateByUrl("")
    }
  })
}
}
