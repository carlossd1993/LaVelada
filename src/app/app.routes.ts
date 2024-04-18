import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ErrorComponent} from "./pages/error/error.component";

export const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "combates", component: ErrorComponent},
  {path: "pronosticos", component: ErrorComponent},
  {path: "entradas", component: ErrorComponent},
  {path: "**",component: HomeComponent}
];
