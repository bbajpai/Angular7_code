import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
//import {HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './shared/books/books.component';
import { RandomPipe } from './shared/random.pipe';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found.component';
import { ProductGuardService } from 'src/app/products/ProductGuardService';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { ConvertToSpacesPipe } from 'src/app/shared/convert-to-spaces.pipe';
import { ProductFilterPipe } from 'src/app/products/product-filter.pipe';
import { StarComponent } from 'src/app/shared/star.component';
import { ProductDetail } from 'src/app/products/product-detail.component';
import { ProductService } from 'src/app/products/product.service';
import { RegisterComponent } from 'src/app/home/register.component';
import { FormPoster } from 'src/services/form-poster.service';
import { CustomerComponent } from 'src/app/home/customer.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    RandomPipe,
    WelcomeComponent,
    PageNotFoundComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductFilterPipe,
    StarComponent,
    ProductDetail,
    RegisterComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
   
    //HttpModule
  ],
  providers: [ProductGuardService, ProductService, FormPoster],
  bootstrap: [AppComponent]
})
export class AppModule { }
