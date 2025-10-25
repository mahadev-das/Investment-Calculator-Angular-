import { Component, EventEmitter, Output, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone:false,
  templateUrl: './user-input.html',
  styleUrl: './user-input.css'
})
export class UserInput {
  InitialInvestment: number = 0;
  AnualInvestment: number = 0;
  ExpectedReturn: number = 0;
  Duration: number = 0;

  @Output() inputDatas = new EventEmitter<{
    InitialInvestment: number,
    AnualInvestment: number,
    ExpectedReturn: number,
    Duration: number,
  }>()

  onSubmit() {
    this.inputDatas.emit({
      InitialInvestment: this.InitialInvestment,
      AnualInvestment: this.AnualInvestment,
      ExpectedReturn: this.ExpectedReturn,
      Duration: this.Duration,
    })
    this.InitialInvestment = 0;
    this.AnualInvestment = 0;
    this.ExpectedReturn = 0;
    this.Duration = 0;

  }
}

