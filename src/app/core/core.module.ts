import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';


@NgModule({
  declarations: [HeaderComponent, LoadingComponent, SearchBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    HeaderComponent,
    LoadingComponent,
    SearchBarComponent
  ]
})
export class CoreModule { }
