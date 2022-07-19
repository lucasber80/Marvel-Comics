import { Component, Input, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.css'],
})
export class ComicCardComponent implements OnInit {
  @Input() comic!: Comic;
  constructor() {}

  ngOnInit(): void {
    console.log(this.comic)
  }
}
