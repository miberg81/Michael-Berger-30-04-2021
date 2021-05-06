import { Action } from "@ngrx/store";
import { City } from "../../home/city-detail/city.model";

export const ADD_FAVORITE_CITY = 'ADD_FAVORITE_CITY'

export class AddFavorite implements Action {
  readonly type: string = ADD_FAVORITE_CITY;
  payload: City;
}