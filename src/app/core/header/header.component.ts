import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';

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

  constructor() { }

  searchBarChanges(changes): void {
    this.searchBarEmitter.emit(changes);
  }

  ngOnInit(): void {
  }

}
