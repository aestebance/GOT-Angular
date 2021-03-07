import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './components/menu/menu.component';
import {SharedRoutingModule} from './shared-routing.module';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
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
    MenuComponent
  ]
})
export class SharedModule { }
