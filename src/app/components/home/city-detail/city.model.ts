import { DayCast } from "./day-cast/day-cast.model";

export class City {
    public key:string
    public name:string
    public country:string
    public tempCurrent: number
    public dateMesured: Date
    public tempMaximum: number
    public tempMinimum: number
    public weatherText: string
    public fiveDaysCast: Array<DayCast>
    public isFavorite : boolean = false
}