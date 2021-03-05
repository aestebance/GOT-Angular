import { Component, OnInit } from '@angular/core';
import {CharactersService} from '../../shared/services/characters.service';

@Component({
  selector: 'app-chronology-page',
  templateUrl: './chronology-page.component.html',
  styleUrls: ['./chronology-page.component.scss']
})
export class ChronologyPageComponent implements OnInit {
  showHome = true;
  showBar = false;
  characterList = [];

  constructor(private characterService: CharactersService) {
    this.characterService.getCharacters().subscribe((res: any) => {
      this.characterList = res;
      console.log(this.characterList);
    });
  }

  ngOnInit(): void {
  }

}
