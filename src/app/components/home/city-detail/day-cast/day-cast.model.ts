import { WeekDays } from "../../../../models/week-days";

export class DayCast {
  public dayOfWeek: string
  public tempMin: number
  public tempMax: number
  
  constructor(epocTimestamp: string,tempMin: number,tempMax: number){
    //convert timestamp to day of week
    const timestamp = + epocTimestamp;
    const a = new Date(timestamp*1000);
    const days = [
      WeekDays.SUNDAY, WeekDays.MONDAY,WeekDays.TUESDAY,
      WeekDays.WEDNESDAY,WeekDays.THURSDAY,WeekDays.FRIDAY,WeekDays.SATURDAY];
    const dayOfWeek = days[a.getDay()]
    this.dayOfWeek = dayOfWeek;

    this.tempMin = tempMin;
    this.tempMax = tempMax;
  }
}