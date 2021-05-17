import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { City } from '../../home/city-detail/city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit,OnChanges {
  @Input() city:City;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.city = changes.city.currentValue;
    }
  }

  onOpenCityClicked() {
    this.router.navigate(['/home', this.city.key]);
  }
}
