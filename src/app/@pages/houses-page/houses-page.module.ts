import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousesPageComponent} from './houses-page.component';
import { HousesPageRoutingModule } from './houses-page-routing.module';
import {MenuModule} from '../../shared/components/menu/menu.module';
import {CoreModule} from '../../core/core.module';
import { HouseDetailComponent } from './pages/house-detail/house-detail.component';


@NgModule({
  declarations: [HousesPageComponent, HouseDetailComponent],
  imports: [
    CommonModule,
    HousesPageRoutingModule,
    MenuModule,
    CoreModule
  ],
  exports: [
    HousesPageComponent
  ]
})
export class HousesPageModule { }
