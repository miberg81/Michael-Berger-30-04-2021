import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { City } from './city.model';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements  OnInit, OnChanges {
  @Input() city: City;
  addOrRemoveFromFavorites: string;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.addOrRemoveFromFavorites = this.city.isFavorite?
     "remove from favorites" : "add to favorites";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.city = changes.city.currentValue;
    }
  }
  
  onAddToRemoveFromFavorites(){
    if(this.city){
      if(this.city.isFavorite) {
        // this will also emit in Subject to notify all parties of interest about favorites change
        this.dataService.removeFromFavorites(this.city);  
      } else {
        // this will also emit in Subject to notify all parties of interest about favorites change
        this.dataService.addToFavorites(this.city);
      }
      this.city.isFavorite = !this.city.isFavorite;
    }
  }
}
