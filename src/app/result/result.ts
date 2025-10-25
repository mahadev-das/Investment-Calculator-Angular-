import { CurrencyPipe } from '@angular/common';
import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-result',
  standalone:false,
  templateUrl: './result.html',
  styleUrls: ['./result.css']
})
export class Result implements OnChanges{
  @Input() initialInvestment: number = 0;
  @Input() anualInvestment: number = 0;
  @Input() expectedReturn: number = 0;
  @Input() duration: number = 0;
  years: number[] = []

  resultsDatas:{
    year:number,
    investmentValue:number, 
    interest:number, 
    totalinterest:number,
    investmentcapital:number}[]=[]




    ngOnChanges(changes: SimpleChanges) {
    // Recalculate whenever any input changes
    this.generateResults();
  }



  private generateResults(): void {
    this.resultsDatas = [];

    const years = Math.max(0, Math.floor(Number(this.duration) || 0));
    if (years === 0) return;

    // Ensure numeric values
    const initial = Number(this.initialInvestment) || 0;
    const annual = Number(this.anualInvestment) || 0;
    const rate = (Number(this.expectedReturn) || 0) / 100; // convert percent to decimal

    let balance = initial;            // starting balance at year 0
    let totalInterest = 0;

    for (let i = 1; i <= years; i++) {
      // interest for this year (on starting balance of this year)
      const interest = balance * rate;

      // accumulate total interest
      totalInterest += interest;

      // end-of-year balance = starting balance + interest + annual contribution
      balance = balance + interest + annual;

      const investedCapital = initial + annual * i;

      this.resultsDatas.push({
        year: i,
        investmentValue: Number(balance.toFixed(2)),
        interest: Number(interest.toFixed(2)),
        totalinterest: Number(totalInterest.toFixed(2)),
        investmentcapital: Number(investedCapital.toFixed(2))
      });
    }
  }







  // ngOnChanges(changes: SimpleChanges) {
  //   if (changes['duration']) {
  //     this.years = [];
  //     for (let i = 1; i <= this.duration; i++) {
  //       this.years.push(i);
        
  //       let investmentValue=this.initialInvestment +(this.anualInvestment*i)+ (this.initialInvestment+(this.anualInvestment*i)*this.expectedReturn/100)
  //       const interest=(investmentValue*this.expectedReturn)/100;
  //       const totalInterest=interest
  //     }
      
      
  //   }
  // }

}