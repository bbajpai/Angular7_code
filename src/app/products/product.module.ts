import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductFilterPipe } from 'src/app/products/product-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductDetail } from 'src/app/products/product-detail.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/products/product.service';
import { ProductGuardService } from 'src/app/products/ProductGuardService';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],

    declarations:[
        ProductListComponent,
        ConvertToSpacesPipe,
        ProductFilterPipe,
        StarComponent,
        ProductDetail
    ],
    providers:[
        ProductService,
        ProductGuardService
    ]
})

export class ProductModule{};