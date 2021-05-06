import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { autocompleteResponseMock, currentConditionResponseMock, fiveDaysCastResponseMock } from 'src/app/models/mocks.model';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { City } from './city-detail/city.model';
import { DayCast } from './city-detail/day-cast/day-cast.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public userInput = "Tel Aviv";
  
  public matchingCitiesRes: Array<any>; // dinamic options for autocomplete
  public selectedCityRes:any; // city selected by user from autocomplete options
  public currentConditionResponse: any;
  public fiveDaysCastResponse:any;
  public selectedCityKey;
  public selectedCityLocalizedName;

  // only the data we need for the UI!
  public city:City = new City(); 
  public fiveDaysCast:Array<DayCast>;
  
  constructor(private apiService: ApiService, private dataService:DataService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    //when clicking on a favoriteb city in favorites, we pass the city key in route params 
    //here we retreive them to load this city from the favorites array
    let cityKey = this.route.snapshot.params['id']
    if (cityKey) {
      let favoriteCity:City = this.dataService.getCityByKey(cityKey);
      favoriteCity? this.initCityFromFavorite(favoriteCity) : this.initTelAviv();
    } 
  }

  private initTelAviv() {
    this.getMatchingCities("215854");
    this.getCurrentConditions("215854");
    this.get5daysCast("215854");
    this.city.key = "215854";
    this.city.name = "Tel Aviv";
    this.city.country = "Israel";
  }

  // will load the current screen from an existing favorite city and not from API
  private initCityFromFavorite(city: City) {
    this.city = city;
    this.city.isFavorite = true;
  }

  onKeyUp(event: any){
    this.getMatchingCities(event.target.value);
  }

  // on each key stroke dinamically fetch cities matching the current search term
  // to fill the select options, for the user to choose from
  getMatchingCities(userInput: string) {
    this.apiService.getMatchingCities(userInput).subscribe(
      (matchingCitiesRes)=>{
        this.matchingCitiesRes = matchingCitiesRes;
      },
      (error)=>{
        this.matchingCitiesRes = autocompleteResponseMock;
      }
    )
  }

  onCitySelected(event: any) {
    this.selectedCityRes = event.option.value;
    this.setupSelectedCity(this.selectedCityRes);
    this.getCurrentConditions(this.selectedCityRes.Key);
    this.get5daysCast(this.selectedCityRes.Key);
  }

  private setupSelectedCity(event: any) {
    this.city.key = this.selectedCityRes.Key;
    this.city.name = this.selectedCityRes.LocalizedName;
    this.city.country = this.selectedCityRes.Country.LocalizedName;
  }

  getCurrentConditions(cityKey: string){
    this.apiService.getCurrentConditionByLocationKey(cityKey)
      .subscribe(
        (currentConditionsRes) => {
          this.currentConditionResponse = currentConditionsRes;
        
          this.city.weatherText = this.currentConditionResponse[0].WeatherText;
          this.city.tempCurrent = this.currentConditionResponse[0].Temperature.Metric.Value;
        },
        (error) => {
          this.currentConditionResponse = currentConditionResponseMock;
          this.city.weatherText = this.currentConditionResponse[0].WeatherText;
          this.city.tempCurrent = this.currentConditionResponse[0].Temperature.Metric.Value;
        }
      );
  }

  get5daysCast(cityKey: string){
    this.apiService.get5DaysCastByLocationKey(cityKey)
      .subscribe(
        (fiveDaysCastResponse) => {
          this.fiveDaysCastResponse = fiveDaysCastResponse;
          this.initFiveDaysCast();
        },
        (error)=>{
          this.fiveDaysCastResponse = fiveDaysCastResponseMock;
          this.initFiveDaysCast();
        }
      );
  }

  private initFiveDaysCast() {
    let fiveDaysCast = new Array<DayCast>();
    this.fiveDaysCastResponse.DailyForecasts.forEach(element => {
      let dayCast: DayCast = new DayCast(
        element.EpochDate,
        element.Temperature.Minimum.Value,
        element.Temperature.Maximum.Value);
      fiveDaysCast.push(dayCast);
    });
    this.city.fiveDaysCast = fiveDaysCast;
  }

  displayFn(city: any) {
    return (city && city.LocalizedName 
    && city.Country && city.Country.LocalizedName) ? 
    (city.LocalizedName + '/' + city.Country.LocalizedName) : '';
  }
}
