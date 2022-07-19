import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css'],
})
export class ComicListComponent implements OnInit {
  constructor(private comicService: ComicService) {}

  comics?: Comic[];
  cont = 16;

  loadMoreComics() {
    this.cont += 8;
    this.comics = this.comics = this.comicService.comics.slice(0, this.cont);
  }

  disableLoadButton(): boolean {
    if (this.comics?.length == this.comicService.comics.length) return true;

    return false;
  }

  ngOnInit(): void {
    this.comics = this.comicService.comics.slice(0, 16);
  }
}
