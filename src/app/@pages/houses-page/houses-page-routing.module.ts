import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HousesPageComponent} from './houses-page.component';
import {HouseDetailComponent} from './pages/house-detail/house-detail.component';

const routes: Routes = [
  {
    path: '', component: HousesPageComponent
  },
  {
    path: 'details/:houseName', component: HouseDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HousesPageRoutingModule { }
