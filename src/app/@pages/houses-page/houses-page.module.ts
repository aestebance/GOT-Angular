import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousesPageComponent} from './houses-page.component';
import { HousesPageRoutingModule } from './houses-page-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import { HouseDetailComponent } from './pages/house-detail/house-detail.component';
import { HouseItemComponent } from './components/house-item/house-item.component';
import { HouseGalleryComponent } from './components/house-gallery/house-gallery.component';


@NgModule({
  declarations: [HousesPageComponent, HouseDetailComponent, HouseItemComponent, HouseGalleryComponent],
  imports: [
    CommonModule,
    HousesPageRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    HousesPageComponent
  ]
})
export class HousesPageModule { }
