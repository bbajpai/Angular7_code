import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { FormPoster } from 'src/services/form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  pageTitle:string = "Welcome Component";
  languages = ['English','Hindi','Spanish','German'];
  hasPrimaryLanguageError:boolean= false;

  model = new Employee('','Smith', true,'Male','English','');

  constructor(private formPoster:FormPoster){
    
  }

  firstLetterToUppercase(value:string){
    if(value.length > 0){
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }

    else{
      this.model.firstName = value;
    }
  }

  validatePrimaryLanguage(event){
    console.log("Selected Language :: ", this.model.primaryLanguage);
    if(this.model.primaryLanguage === 'default'){
      this.hasPrimaryLanguageError = true
    }
    else{
      this.hasPrimaryLanguageError = false;
    }
  }

  submitForm(form: NgForm){
    console.log(form.value);
    this.validatePrimaryLanguage(this.model.primaryLanguage);
    if(this.hasPrimaryLanguageError){
      return;
    }
    this.formPoster.postEmployeeData(form.value)
    .subscribe((res)=> console.log('data posted'))
  }

}
