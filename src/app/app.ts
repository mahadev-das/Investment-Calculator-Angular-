import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { UserInput } from './user-input/user-input';
import { Result } from './result/result';

@Component({
  selector: 'app-root',
  imports: [Header, UserInput, Result],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  InitialInvestment: number = 0;
  AnualInvestment: number = 0;
  ExpectedReturn: number = 0;
  Duration: number = 0;

  inputdatas(datas: {
    InitialInvestment: number;
    AnualInvestment: number;
    ExpectedReturn: number;
    Duration: number;
  }) {
    this.InitialInvestment=datas.InitialInvestment;
    this.AnualInvestment=datas.AnualInvestment;
    this.ExpectedReturn=datas.ExpectedReturn;
    this.Duration=datas.Duration;
    console.log(this.InitialInvestment);
    console.log(this.AnualInvestment);
    console.log(this.ExpectedReturn);
    console.log(this.Duration);
    
  }
}
