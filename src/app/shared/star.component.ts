import { Component,OnChanges,Input, EventEmitter, Output } from "@angular/core";



@Component({
    selector: 'star-review',
    templateUrl : './star.component.html',
    styleUrls :['./star.component.css']
})

export class StarComponent implements OnChanges {
   
       @Input() rating:number ; 
        starWidth:number; 
        @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

        ngOnChanges(): void {
            this.starWidth = this.rating * 71/5
        }

        onClick():void {
            console.log(`The rating clicked is ${this.rating} `);
            this.ratingClicked.emit(`The rating clciked is ${this.rating}`);
        }
}