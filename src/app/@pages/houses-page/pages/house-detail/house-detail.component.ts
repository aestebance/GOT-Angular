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
  date: any;
  loading = true;

  constructor(private route: ActivatedRoute, private housesService: HousesService) {
    this.route.paramMap.subscribe(params => {
      if (params.get('houseName')) {
        this.houseName = params.get('houseName');
        this.housesService.getHouse(this.houseName).subscribe((res) => {
          this.houseData = res[0];
          this.date = new Date(this.houseData.createdAt);
          this.loading = false;
        });
      }
    });
  }

  ngOnInit(): void {
    this.houseData = false;
  }

}
