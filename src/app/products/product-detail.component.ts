import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail.component',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetail implements OnInit{

    title:string = "Product Detail Page";
    productName:string;
    image:string;
    description:string;

    constructor(private _route:ActivatedRoute, private _router: Router){
      
    }

    ngOnInit(): void {
      let id = +this._route.snapshot.params['id'];

      this._route.queryParams.subscribe( (params) =>{
        this.productName = params['name'];
        this.image = params['img'];
        this.description = params['desc']
      })

      console.log("Product ID: ", id);
      console.log("Product Name : ", this.productName);
      console.log("Product Image : ", this.image)
      console.log("Product Description : ", this.description)
      this.title += `>>>> ${id}`;

     }

     onBackPress():void{
        this._router.navigate(['/products']);
     }

}
