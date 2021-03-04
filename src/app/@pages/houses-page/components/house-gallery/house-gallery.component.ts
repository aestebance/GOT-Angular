import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-gallery',
  templateUrl: './house-gallery.component.html',
  styleUrls: ['./house-gallery.component.scss']
})
export class HouseGalleryComponent implements OnInit {
  @Input() houseList: any;
  constructor() {}

  ngOnInit(): void {
    this.houseList = [];
  }
}
