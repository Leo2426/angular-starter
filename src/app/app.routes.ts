import { Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {MainPageComponent} from "./store/pages/main-page/main-page.component";

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"store", component: MainPageComponent},
];
