import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CharactersService} from '../../../../shared/services/characters.service';
import {HousesService} from '../../../../shared/services/houses.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  charName: any;
  charData: any;
  houseData: any;
  showHome = true;
  showBar = false;
  showBack = 'characters';
  loading = true;

  constructor(private route: ActivatedRoute, private characterService: CharactersService, private housesService: HousesService) {
    this.route.paramMap.subscribe(params =>  {
      if (params.get('charName')) {
        this.charName = params.get('charName');
        this.characterService.getChar(this.charName).subscribe((res: any) => {
          this.charData = res;
          this.housesService.getHouse(this.charData.house).subscribe((data: any) => {
            this.houseData = data;
            this.loading = false;
          });
        });
      }
    });
  }

  ngOnInit(): void {
    this.charData = false;
    this.houseData = false;
  }
}
