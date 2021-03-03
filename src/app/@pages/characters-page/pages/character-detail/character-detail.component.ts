import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  charName: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params =>  {
      if (params.get('charName')) {
        this.charName = params.get('charName');
      }
    });
  }

  ngOnInit(): void {
  }

}
