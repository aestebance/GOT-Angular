import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss']
})
export class ChronologyPageComponent implements OnInit {
  showHome = true;
  showBar = true;

  constructor() { }

  ngOnInit(): void {
  }

}
