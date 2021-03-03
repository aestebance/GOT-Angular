import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChronologyPageComponent} from './chronology-page.component';
import { ChronologyPageRoutingModule } from './chronology-page-routing.module';
import {MenuModule} from '../../shared/components/menu/menu.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  declarations: [ChronologyPageComponent],
  imports: [
    CommonModule,
    ChronologyPageRoutingModule,
    MenuModule,
    CoreModule
  ],
  exports: [
    ChronologyPageComponent
  ]
})
export class ChronologyPageModule { }
