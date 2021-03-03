import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.scss']
})
export class HouseDetailComponent implements OnInit {
  houseName: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      if (params.get('houseName')) {
        this.houseName = params.get('houseName');
      }
    });
  }

  ngOnInit(): void {
  }

}
