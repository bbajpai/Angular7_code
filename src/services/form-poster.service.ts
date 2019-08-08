import {Injectable} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from 'src/app/models/employee.model';


@Injectable()
export class FormPoster{
    private URL="http://localhost:3003/postEmployee";

    constructor(private http:HttpClient){

    }

    postEmployeeData(employee:Employee){
        console.log('Posting employee data :: ', employee);

        return this.http.post(this.URL,employee);
    }
}