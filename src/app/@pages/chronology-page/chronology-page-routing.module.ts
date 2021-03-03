import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChronologyPageComponent} from './chronology-page.component';

const routes: Routes = [
  {path: '', component: ChronologyPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChronologyPageRoutingModule { }
