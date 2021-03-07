import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showHome: any;
  @Input() showBar: any;
  @Input() showBack: any;
  @Output() searchBarEmitter = new EventEmitter();

  constructor(private translate: TranslateService) {
    const language = localStorage.getItem('language') || 'es';
    translate.use(language);
  }

  searchBarChanges(changes): void {
    this.searchBarEmitter.emit(changes);
  }

  changeLanguage(language: string): void {
    localStorage.setItem('language', language);
    this.translate.use(language);
}

  ngOnInit(): void {
  }

}
