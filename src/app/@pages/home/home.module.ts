import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';


@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class HomeModule { }
