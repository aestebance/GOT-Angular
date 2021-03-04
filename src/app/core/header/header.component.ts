import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() showHome: any;
  @Input() showBar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
