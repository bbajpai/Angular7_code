import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from 'src/app/products/product-list.component';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { ProductDetail } from 'src/app/products/product-detail.component';
import { PageNotFoundComponent } from 'src/app/shared/page-not-found.component';
import { ProductGuardService } from 'src/app/products/ProductGuardService';
import { RegisterComponent } from 'src/app/home/register.component';
import { CustomerComponent } from 'src/app/home/customer.component';

const routes: Routes = [
    {path:'products', component:ProductListComponent },
    {
      path:'products/:id',
      canActivate:[ProductGuardService],
      component:ProductDetail},
    {path:'register', component:RegisterComponent},
    {path:'signUp', component:CustomerComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'', redirectTo:'welcome', pathMatch:'full'},
    {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
