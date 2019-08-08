import {Component} from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector:'first-comp',
  template: `

        <div>
            <nav class='navbar navbar-default'>
                <div class='container-fluid'>
                    <a class='navbar-brand'>{{pageTitle}}</a>
                    <ul class='nav navbar-nav'>
                        <li><a [routerLink]="['/welcome']">Home</a></li>
                        <li><a [routerLink]="['/products']">Product List</a></li>
                        <li><a [routerLink]="['/register']">Register Form</a></li>
                        <li><a [routerLink]="['/signUp']">Customer Form</a></li>
                    </ul>
                </div>
            </nav>

        </div>
      <div class="conatiner">
          <router-outlet></router-outlet>
      </div>
  `
})

export class AppComponent{
    //var varname = "value"
    // variablename:datatype = value
    pageTitle:string = "Product Management";
    isOnline:boolean = true;
}
