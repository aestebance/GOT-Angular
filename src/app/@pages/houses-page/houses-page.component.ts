import { Component, OnInit } from '@angular/core';
import {HousesService} from '../../shared/services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {
  houseList = [];
  houseFiltered;
  showHome = true;
  showBar = true;
  loading = true;

  constructor(private housesService: HousesService) {
    this.housesService.getHouses().subscribe((res:any) => {
      res.map((house) => {
        if (house.logoURL) {
          this.houseList.unshift(house);
        } else {
          this.houseList.push(house);
        }
      });
      this.houseFiltered = this.houseList;
      this.loading = false;
    });
  }

  searchBarChanges(changes): void {
    this.houseFiltered = this.houseList.filter((data) => data.name.toUpperCase().includes(changes.toUpperCase()));
  }

  ngOnInit(): void {
    window.scroll(0,0);
  }

}
