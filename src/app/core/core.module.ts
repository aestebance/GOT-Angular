import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [HeaderComponent, LoadingComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent
  ]
})
export class CoreModule { }
