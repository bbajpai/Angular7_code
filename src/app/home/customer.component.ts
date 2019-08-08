import {Component,OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';


// function ratingRange(c:AbstractControl):{[key:string] : boolean} | null {
//     if( c.value !=undefined && (isNaN(c.value)|| c.value < 1 || c.value > 5)){
//         return{'range': true}
//     };
//     return null;
// }

function ratingRange(min:number, max:number): ValidatorFn {
    return (c: AbstractControl):{[key:string] : boolean} | null =>{
        if( c.value !=undefined && (isNaN(c.value)|| c.value < min || c.value >max)){
            return{'range': true}
        };
        return null;
    };
  
}


@Component({
    selector:'sign-up',
    templateUrl:'./customer.component.html'
})

export class CustomerComponent implements OnInit{
   
        customerForm:FormGroup;
        customer : Customer = new Customer();

        constructor(private fb : FormBuilder){

        }

        ngOnInit(): void {

            this.customerForm = this.fb.group({
                firstName:['', [Validators.required,Validators.minLength(5)]],
                lastName:['', [Validators.required, Validators.maxLength(20)]],
                email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9._]+')]],
                phone:'',
                notification:'email',
                rating:['',ratingRange(1,10)]
            });

            // this.customerForm = new FormGroup({
            //     firstName : new FormControl(),
            //     lastName: new FormControl(),
            //     email:new FormControl()
            // });
         }

        populateTestData(): void{
            this.customerForm.patchValue({
                firstName: 'John',
                lastName:'Smith'
            })
        }
        save(customerForm: NgForm){
            console.log(customerForm.form);
            console.log("Saved :: " + JSON.stringify(customerForm.value));
        }

        setNotification(notify:String){
            console.log(notify);

            const phoneControl = this.customerForm.get('phone');
            if(notify === 'text'){
                phoneControl.setValidators(Validators.required);
            }
            else{
                phoneControl.clearValidators();
            }

            phoneControl.updateValueAndValidity();

        }
}