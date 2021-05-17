import { DOCUMENT } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";
import {
  autoCompleteForWordTel,
  fiveDaysCastResponseMock,
} from "src/app/models/mocks.model";
import { ApiService } from "src/app/services/api.service";
import { DataService } from "src/app/services/data.service";
import { NoDataAlertComponent } from "../shared/no-data-alert/no-data-alert.component";
import { ServerProblemAlertComponent } from "../shared/server-problem-alert/server-problem-alert.component";
import { City } from "./city-detail/city.model";
import { DayCast } from "./city-detail/day-cast/day-cast.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public userInput;

  public matchingCitiesRes: Array<any>; // dinamic options for autocomplete
  public selectedCityRes: any; // city selected by user from autocomplete options
  public currentConditionResponse: any;
  public fiveDaysCastResponse: any;
  public selectedCityLocalizedName;

  // only the data we need for the UI!
  public city: City;
  public fiveDaysCast: Array<DayCast>;
  serverErrorHasBeenShown: boolean = false; // prevent server error showing multiple times in a single session

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // When clicking on a favorite city in Favorites page, we pass the city key in route params
    // We retreive the key here, find the city in the cities history array, then load it
    // if the page is loaded first time, Tel-Aviv key will be passed in params
    let cityKey = this.route.snapshot.params["id"];
    if (cityKey) {
      let city: City = this.dataService.getCityByKey(cityKey);
      city? this.loadCity(city): this.loadTelAviv();
    }
  }

  private loadTelAviv() {
    // try getting fresh weather data for Tel Aviv, if API won;t answer, load mockup data
    this.getMatchingCities("215854");
    this.getCurrentConditions("215854");
    this.get5daysCast("215854");

    this.city = new City();
    this.city.key = "215854";
    this.city.name = "Tel Aviv";
    this.city.country = "Israel";
  }

  // load the current screen from an existing favorite city and not from API
  private loadCity(city: City) {
    this.city = city;
    //this.city.isFavorite = true;
    //this.dataService.markCityAsFavorite(this.city);
  }

  onKeyUp(event: any) {
    this.getMatchingCities(event.target.value);
  }

  // on each key stroke dinamically fetch cities matching the current search term
  // to fill the select options, for the user to choose from
  getMatchingCities(userInput: string) {
    if (this.dataService.serverResponds) {
      this.apiService.getMatchingCities(userInput).subscribe(
        (res) => {
          console.log("current matching cities for input ", userInput,": ", res);
          this.matchingCitiesRes = (res && res.length>0) ? res : autoCompleteForWordTel;
        },
        (error) => {
          this.dataService.serverResponds = false;
          this.matchingCitiesRes = autoCompleteForWordTel;
          // if server refuced to respond we only want to show error once
          // if(this.dataService.getSearchHistory.length>0) {
          //   this.dialog.open(ServerProblemAlertComponent);
          // }
        }
      );
    } else {
      this.matchingCitiesRes = autoCompleteForWordTel;
    }
  }

  onCitySelected(event: any) {
    let selectedCity = event.option.value;
    this.setupSelectedCity(selectedCity);
    this.getCurrentConditions(selectedCity.Key);
    this.get5daysCast(selectedCity.Key);
  }

  // create a small footprint city object
  private setupSelectedCity(selectedCity: any) {
    this.city = new City();
    this.city.key = selectedCity.Key;
    this.city.name = selectedCity.LocalizedName;
    this.city.country = selectedCity.Country.LocalizedName;
    this.city.isFavorite = false;
  }

  // get server response otherwice get mock data
  getCurrentConditions(cityKey: string) {
    if (this.dataService.serverResponds) {
      this.apiService.getCurrentConditionByLocationKey(cityKey).subscribe(
        (res) => {
          console.log("current conditions for city key", cityKey,": ", res);
          this.currentConditionResponse =  res ;
          this.initCurrentConditions();
        },
        (error) => {
          this.dataService.serverResponds = false;
          this.currentConditionResponse = this.dataService.getCurrentConditionsFromMock(cityKey);
          this.initCurrentConditions();
        }
      );
    } else {
      this.currentConditionResponse = this.dataService.getCurrentConditionsFromMock(cityKey);
      this.initCurrentConditions();
    }
  }

  private initCurrentConditions() {
    this.city.weatherText = this.currentConditionResponse[0].WeatherText;
    this.city.tempCurrent = this.currentConditionResponse[0].Temperature.Metric.Value;
  }

  // get server response otherwice get mock data
  get5daysCast(cityKey: string) {
    if (this.dataService.serverResponds) {
      this.apiService.get5DaysCastByLocationKey(cityKey).subscribe(
        (res) => {
          console.log("5 days cast for city key ", cityKey,": ",res);
          this.fiveDaysCastResponse = res;
          this.initFiveDaysCast();
        },
        (error) => {
          this.dataService.serverResponds = false;
          this.fiveDaysCastResponse = this.dataService.getFiveDaysForecastFromMock(cityKey);
          this.initFiveDaysCast();
        }
      );
    } else {
      this.fiveDaysCastResponse = this.dataService.getFiveDaysForecastFromMock(cityKey);
      this.initFiveDaysCast();
    }
  }

  // construct smaller object from the original response
  private initFiveDaysCast() {
    let fiveDaysCast = new Array<DayCast>();
    this.fiveDaysCastResponse.DailyForecasts.forEach((element) => {
      let dayCast: DayCast = new DayCast(
        element.EpochDate,
        element.Temperature.Minimum.Value,
        element.Temperature.Maximum.Value
      );
      fiveDaysCast.push(dayCast);
    });
    this.city.fiveDaysCast = fiveDaysCast;
    this.dataService.addToSearchHistory(this.city);
  }

  // display input value as string instead of objects
  displayFn(city: any) {
    return city && city.LocalizedName && city.Country && city.Country.LocalizedName
      ? city.LocalizedName + "/" + city.Country.LocalizedName: "";
  }
}
