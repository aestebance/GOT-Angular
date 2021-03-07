import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharactersPageComponent} from './characters-page.component';
import { CharactersPageRoutingModule } from './characters-page-routing.module';
import {SharedModule} from '../../shared/shared.module';
import {CoreModule} from '../../core/core.module';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharactersGalleryComponent } from './components/characters-gallery/characters-gallery.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [CharactersPageComponent, CharacterDetailComponent, CharacterItemComponent, CharactersGalleryComponent],
  imports: [
    CommonModule,
    CharactersPageRoutingModule,
    SharedModule,
    CoreModule,
    ScrollingModule,
    HttpClientModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    CharactersPageRoutingModule
  ]

})
export class CharactersPageModule { }
