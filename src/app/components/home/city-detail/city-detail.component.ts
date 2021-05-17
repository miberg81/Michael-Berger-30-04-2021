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
    // setup the title on the favorite/unfavorite button
    this.addOrRemoveFromFavorites = this.city.isFavorite?
    "remove from favorites" : "add to favorites";
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.city = changes.city.currentValue;
      this.addOrRemoveFromFavorites = this.city.isFavorite?
     "remove from favorites" : "add to favorites";
    }
  }
  
  onAddToRemoveFromFavorites() {
    if(this.city){
      if(this.city.isFavorite) {
        // this will also emit in Subject to notify all parties of interest about favorites change
        this.dataService.unmarkCityAsFavorite(this.city);  
        this.city.isFavorite = false;
        this.addOrRemoveFromFavorites = "add to favorites"
      } else {
        // this will also emit in Subject to notify all parties of interest about favorites change
        this.dataService.markCityAsFavorite(this.city);
        this.city.isFavorite = true;
        this.addOrRemoveFromFavorites = "remove from favorites";
      }
    }
  }
}
