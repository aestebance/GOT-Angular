import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersPageComponent} from './characters-page.component';
import { CharactersPageRoutingModule } from './characters-page-routing.module';
import {MenuModule} from '../../shared/components/menu/menu.module';
import {CoreModule} from '../../core/core.module';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';


@NgModule({
  declarations: [CharactersPageComponent, CharacterDetailComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    MenuModule,
    CoreModule
  ],
  exports: [
    CharactersPageRoutingModule
  ]

})
export class CharactersPageModule { }
