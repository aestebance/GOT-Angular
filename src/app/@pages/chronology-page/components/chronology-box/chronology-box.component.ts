import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chronology-box',
  templateUrl: './chronology-box.component.html',
  styleUrls: ['./chronology-box.component.scss']
})
export class ChronologyBoxComponent implements OnInit {
  @Input() character: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
  }

}
