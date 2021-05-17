import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FavoritesComponent } from "./components/favorites/favorites.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchHistoryComponent } from "./components/search-history/search-history.component";

const routes: Routes = [
  { path: "", redirectTo: "/home/215854", pathMatch: "full" },
  { path: "home", redirectTo: "/home/215854", pathMatch: "full" },
  { path: "home/:id", component: HomeComponent },
  { path: "favorites", component: FavoritesComponent },
  { path: "searchHistory", component: SearchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
