import { Subject } from "rxjs/internal/Subject";
import { City } from "../components/home/city-detail/city.model";

export class DataService {
  private favorites: Array<City> = new Array<City>();
  public favoritesChanged: Subject<boolean> = new Subject<boolean>();
  removeFromVavorites: any;

  addToFavorites(city:City) {
    if(!this.getCityByKey(city.key)) {
      this.favorites.push(city);
      this.favoritesChanged.next();
    }
  }

  removeFromFavorites(city:City) {
    const index = this.favorites.findIndex(element => element.key === city.key);
    if(index != -1) {
      this.favorites.splice(index, 1);
      this.favoritesChanged.next();
    }
  }

  getFavorites() {
    return this.favorites.slice(); // slice is to get a copy, while protecting the original data;
  }

  getCityByKey(key: string){
    return this.favorites.find(element => element.key === key);
  }

}