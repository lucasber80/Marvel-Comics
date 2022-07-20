import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css'],
})
export class ComicCardComponent implements OnInit {
  @Input() comic!: Comic;

  constructor(public comicService:ComicService) {}

  returnCreatorsNames(): string {
    let stringCreators = '';
    let creators = this.comic.creators;
    if (creators) {
      for (var i = 0; i < creators.length; i++) {
        stringCreators += creators[i].name;
        if (i != creators.length - 1 && i != 1) stringCreators += ', ';
        if (i == 1) break;
      }
    }
    return stringCreators;
  }

 openModal(){
  this.comicService.loadModal = false;
  setTimeout(()=>{this.comicService.loadModal = true;},200)
  this.comicService.selectedComic = this.comic
  
 }

  ngOnInit(): void {}
}
