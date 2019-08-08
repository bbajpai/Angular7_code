import { Injectable } from "@angular/core";
import { IProduct } from "src/app/products/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

//import { Http, Response } from "@angular/http";
// import {map} from "rxjs/operators"




@Injectable()
export class ProductService {


    private productURL = "https://ngapi4.herokuapp.com/api/getProducts"
    constructor(private _http: HttpClient){

    }
    // constructor(private _httpOld: Http){
        
    //         }

    // HTTP Client Method
   getProducts(): Observable<IProduct[]>{
       return this._http.get<IProduct[]>(this.productURL);
   }
   

// HTTP Old   
//    getProducts():Observable<IProduct[]>{
//        return this._httpOld.get(this.productURL).pipe(map(this.resolveData))
//    }

// private resolveData(res: Response){
          ///  return res.json()
// }


    // Javscript Calling HTTP --- Promise
    // getProducts():Promise<IProduct[]>{
    //     return this._httpOld.get(this.productURL).toPromise();
    //               
    // }
}