import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../shared/services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {
  houseList;
  showHome = true;
  showBar = true;

  constructor(private housesService: HousesService) {
    this.housesService.getHouses().subscribe((res:any) => {
      this.houseList = res;
      console.log(this.houseList);
    });
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
