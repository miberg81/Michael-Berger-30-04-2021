import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../components/home/city-detail/city.model';
import { DayCast } from '../components/home/city-detail/day-cast/day-cast.model';
import { WeekDays } from '../models/week-days';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  headers: HttpHeaders = new HttpHeaders;

  // personal:Qr7KvOTrug3fjehlzXkqZrGa7uopRmoZ
  // dev:VU40pGIVFI5hox6FGadc5GAYXYnaICtZ
  private readonly apiDevKey = "VU40pGIVFI5hox6FGadc5GAYXYnaICtZ";
  private readonly apiPersonalKey = "Qr7KvOTrug3fjehlzXkqZrGa7uopRmoZ";

  constructor(private httpService: HttpClient) {
    this.headers.append("Content-Type", "application/json");
  }
  
  //fetch cities, matching full/parcial name entered by user, name will be autocompleted on server
  getMatchingCities(userInput: string):Observable<any>{
    let myParams = {
      "apikey":this.apiPersonalKey,
      "q":userInput,
      "language":"en-us"
    }
    const backendUrl = "https://dataservice.accuweather.com/locations/v1/cities/autocomplete";
    return this.httpService.get<any>(backendUrl,{params: myParams});
  }

  getCurrentConditionByLocationKey(locationKey: string):Observable<any>{
    const myParams = {
      "apikey":this.apiPersonalKey,
      "language":"en-us",
      "details":"false"
    }
    const backendUrl = "https://dataservice.accuweather.com/currentconditions/v1/" + locationKey;
    return this.httpService.get<any>(backendUrl, {params: myParams});
  }

  get5DaysCastByLocationKey(locationKey: string):Observable<any>{
    const myParams = {
      "apikey":this.apiPersonalKey,
      "language":"en-us",
      "details":"false",
      "metric":"true"
    }
    const backendUrl = "https://dataservice.accuweather.com/forecasts/v1/daily/5day/" + locationKey;
    return this.httpService.get<any>(backendUrl, {params: myParams});
  }
}
