import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersPageComponent} from './characters-page.component';
import {CharacterDetailComponent} from './pages/character-detail/character-detail.component';

const routes: Routes = [
  {path: '', component: CharactersPageComponent},
  {path: 'details/:charName', component: CharacterDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersPageRoutingModule { }
