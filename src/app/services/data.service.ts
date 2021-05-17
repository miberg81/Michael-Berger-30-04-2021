import { Subject } from "rxjs/internal/Subject";
import { City } from "../components/home/city-detail/city.model";
import { autoCompleteForWordTel } from "../models/mocks.model";

export class DataService {
  private searchHistory: Array<City> = new Array<City>();
  public searchHistoryChanged: Subject<boolean> = new Subject<boolean>();
  public serverResponds = true;

  addToSearchHistory(city:City) {
    if(!this.getCityByKey(city.key)) {
      this.searchHistory.push(city);
      //this.searchHistoryChanged.next();
    }
  }

  // will not remove from the history list, just unmark the "isFavorite" on the city
  unmarkCityAsFavorite(city:City) {
    const index = this.searchHistory.findIndex(element => element.key === city.key);
    if(index != -1) {
      this.searchHistory[index].isFavorite = false;
      //this.searchHistoryChanged.next();
    }
  }

  // will not add the city to array (was added earlear to history array)
  // will only mark it "isFavorite"
  markCityAsFavorite(city:City) {
    const index = this.searchHistory.findIndex(element => element.key === city.key);
    if(index != -1) {
      this.searchHistory[index].isFavorite = true;
    }
  }

  getSearchHistory() {
    return this.searchHistory.slice(); // slice is to get a copy, while protecting the original data;
  }

  getCityByKey(key: string){
    return this.searchHistory.find(element => element.key === key);
  }

  getCurrentConditionsFromMock(key: string) {
    const city = autoCompleteForWordTel.find(element => element.Key === key);
    const currentConditions = city.CurrentConditions;
    return currentConditions;
  }

  getFiveDaysForecastFromMock(key: string) {
    const city = autoCompleteForWordTel.find(element => element.Key === key);
    const currentConditions = city.FiveDaysForecast;
    return currentConditions;
  }

}