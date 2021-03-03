import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChronologyPageComponent} from './chronology-page.component';
import { ChronologyPageRoutingModule } from './chronology-page-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import { ChronologyBoxComponent } from './components/chronology-box/chronology-box.component';

@NgModule({
  declarations: [ChronologyPageComponent, ChronologyBoxComponent],
  imports: [
    CommonModule,
    ChronologyPageRoutingModule,
    SharedModule,
    CoreModule
  ],
  exports: [
    ChronologyPageComponent
  ]
})
export class ChronologyPageModule { }
