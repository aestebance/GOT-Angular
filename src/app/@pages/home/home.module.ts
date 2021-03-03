import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MenuModule} from '../../shared/components/menu/menu.module';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MenuModule,
    CoreModule
  ]
})
export class HomeModule { }
