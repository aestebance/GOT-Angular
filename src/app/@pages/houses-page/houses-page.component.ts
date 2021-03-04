import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../shared/services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {
  houseList;
  houseFiltered;
  showHome = true;
  showBar = true;

  constructor(private housesService: HousesService) {
    this.housesService.getHouses().subscribe((res:any) => {
      this.houseList = res;
      this.houseFiltered = this.houseList;
    });
  }

  searchBarChanges(changes): void {
    this.houseFiltered = this.houseList.filter((data) => data.name.toUpperCase().includes(changes.toUpperCase()));
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
