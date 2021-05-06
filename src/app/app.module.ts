import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CityComponent } from './components/favorites/city/city.component';
import { CityDetailComponent } from './components/home/city-detail/city-detail.component';
import { DayCastComponent } from './components/home/city-detail/day-cast/day-cast.component';
import { ApiService } from './services/api.service';
import { DataService } from './services/data.service';
//import { StoreModule } from '@ngrx/store'
import { FavoritesReducer } from './components/favorites/store/favorites.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavoritesComponent,
    CityComponent,
    CityDetailComponent,
    DayCastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //StoreModule.forRoot({favorites: FavoritesReducer})
  ],
  providers: [
    ApiService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
