import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone:true,
  imports: [],
  templateUrl: './result.html',
  styleUrls: ['./result.css']
})
export class Result implements OnChanges{
  @Input() initialInvestment: number = 0;
  @Input() anualInvestment: number = 0;
  @Input() expectedReturn: number = 0;
  @Input() duration: number = 0;
  years: number[] = []

  ngOnChanges(changes: SimpleChanges) {
    if (changes['duration']) {
      this.years = [];
      for (let i = 1; i <= this.duration; i++) {
        this.years.push(i);
        const interest=(this.initialInvestment*this.expectedReturn)/100;
        let investmentValue=this.initialInvestment + 
      }
      
      
    }
  }

}