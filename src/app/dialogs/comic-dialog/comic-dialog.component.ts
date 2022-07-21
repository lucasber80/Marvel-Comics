import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic-dialog',
  templateUrl: './comic-dialog.component.html',
  styleUrls: ['./comic-dialog.component.css'],
  providers:[MessageService]
})
export class ComicDialogComponent implements OnInit {
  constructor(
    private comicService: ComicService,
    private messageService: MessageService
  ) {}
  comic!: Comic;
  writers!: string;

  ngOnInit(): void {
    this.comic = this.comicService.selectedComic;
    this.writers = this.returnWriters();
   
  }

  returnWriters(): string {
    let text = '';
    let creators = this.comic.creators;
    let cont = 0;

    for (var i = 0; i < creators.length; i++) {
      if (creators[i].role?.includes('writer')) {
        cont++;
        text += creators[i].name + ', ';
      }
    }
    let index = text.lastIndexOf(',');

    if (index == text.length - 2) {
      text = text.slice(0, text.length - 2);
    }

    if (cont == 0) return 'N/A';
    return text;
  }
}
