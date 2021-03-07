import {Component, OnInit} from '@angular/core';
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
  ordered: boolean;

  constructor(private characterService: CharactersService) {
    this.characterService.getCharacters().subscribe((res: any) => {
      this.characterList = res;
      this.characterList = this.characterList.filter((c) => c.age).filter((d) => d.age.age && d.age.age <= 100).map((char) => {
          return char;
      });
      this.ordering();
    });
  }

  ordering = () => {
    if (!this.ordered) {
      this.characterList = this.characterList.sort((a, b) => {
        if (a.age && b.age) {
          return b.age.age - a.age.age;
        }
      });
      this.ordered = true;
    }
    else {
      this.characterList = this.characterList.sort((a, b) => {
        if (a.age && b.age) {
          return a.age.age - b.age.age;
        }
      });
      this.ordered = false;
    }
}

  ngOnInit(): void {
    this.ordered = true;
  }

}
