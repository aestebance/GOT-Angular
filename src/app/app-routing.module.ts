import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('./@pages/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'characters', loadChildren: () =>
      import('./@pages/characters-page/characters-page.module').then(m => m.CharactersPageModule)
  },
  {
    path: 'chronology', loadChildren: () =>
      import('./@pages/chronology-page/chronology-page.module').then(m => m.ChronologyPageModule)
  },
  {
    path: 'houses', loadChildren: () =>
      import('./@pages/houses-page/houses-page.module').then(m => m.HousesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
