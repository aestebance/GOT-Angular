import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-characters-gallery',
  templateUrl: './characters-gallery.component.html',
  styleUrls: ['./characters-gallery.component.scss']
})
export class CharactersGalleryComponent implements OnInit {
  @Input() characterList: any;
  options = { autoHide: false, scrollbarMinSize: 100 };

  constructor() {  }

  ngOnInit(): void {
    (this.characterList === undefined) ? this.characterList = [] : null;
  }

}
