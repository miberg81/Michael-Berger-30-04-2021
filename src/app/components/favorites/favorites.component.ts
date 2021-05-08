import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { City } from '../home/city-detail/city.model';
import { DayCast } from '../home/city-detail/day-cast/day-cast.model';
import { WeekDays } from '../../models/week-days';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { NoDataAlertComponent } from '../shared/no-data-alert/no-data-alert.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  //favorites: Observable< {favorites: City[]}>;
  favorites: City[];
  constructor(
    private dataService:DataService,
    private dialogue: MatDialog
    //private store: Store<{ favorites: {favorites: City[]} }> 
    ) { }

  ngOnInit() {
    //this.favorites = this.store.select('favorites')
    
    this.favorites = this.dataService.getFavorites();
    this.dataService.favoritesChanged.subscribe(()=>{
      this.favorites = this.dataService.getFavorites(); 
    });

    if(!this.favorites === undefined || this.favorites.length === 0) 
      this.dialogue.open(NoDataAlertComponent);
    console.log("favorites", this.favorites);
  }

}
