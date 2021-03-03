import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {SharedRoutingModule} from './shared-routing.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
