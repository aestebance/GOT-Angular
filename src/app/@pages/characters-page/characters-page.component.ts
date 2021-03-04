import { Component, OnInit } from '@angular/core';
import {CharactersService} from '../../shared/services/characters.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characterList;
  showHome = true;
  showBar = true;

  constructor(private characterService: CharactersService) {
    this.characterService.getCharacters().subscribe((res: any) => {
      this.characterList = res;
      console.log(this.characterList);
    });
  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }
}
