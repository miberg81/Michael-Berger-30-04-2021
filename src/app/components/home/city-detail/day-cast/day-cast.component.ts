import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { DayCast } from './day-cast.model';

@Component({
  selector: 'app-day-cast',
  templateUrl: './day-cast.component.html',
  styleUrls: ['./day-cast.component.scss']
})
export class DayCastComponent implements OnInit,OnChanges {
  @Input() dayCast:DayCast;
  minTemp: number;
  maxTemp: number;
  public unit: string = "C";
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.dayCast = changes.dayCast.currentValue;
    }
    this.minTemp = this.dayCast.tempMin;
    this.maxTemp = this.dayCast.tempMax;
  }

  ngOnInit() {
    this.minTemp = this.dayCast.tempMin;
    this.maxTemp = this.dayCast.tempMax;
  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return Math.round((fahrenheit - 32)/1.8);
  }

  celsiusToFahrenheit(celsisus: number): number {
    return Math.floor((celsisus * 1.8) + 32);
  }

  toggleUnit(){
    if(this.unit === "C") {  // celsius
      this.unit = "F";
      this.minTemp = this.celsiusToFahrenheit(this.minTemp);
      this.maxTemp = this.celsiusToFahrenheit(this.maxTemp);
    } else {
      this.unit = "C";
      this.minTemp = this.fahrenheitToCelsius(this.minTemp);
      this.maxTemp = this.fahrenheitToCelsius(this.maxTemp);
    }
  }
}
