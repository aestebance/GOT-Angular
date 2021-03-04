import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HousesService} from '../../../../shared/services/houses.service';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {
  houseName: any;
  houseData: any;
  showHome = true;
  showBar = false;
  showBack = 'houses';

  constructor(private route: ActivatedRoute, private housesService: HousesService) {
    this.route.paramMap.subscribe(params => {
      if (params.get('houseName')) {
        this.houseName = params.get('houseName');
        this.housesService.getHouse(this.houseName).subscribe((res) => {
          this.houseData = res[0];
          console.log(this.houseData);
        });
      }
    });
  }

  ngOnInit(): void {
    this.houseData = false;
  }

}
