import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {HeaderComponent} from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { SearchBarComponent } from './header/components/search-bar/search-bar.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [HeaderComponent, LoadingComponent, SearchBarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
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
    HeaderComponent,
    LoadingComponent,
    SearchBarComponent
  ]
})
export class CoreModule { }
