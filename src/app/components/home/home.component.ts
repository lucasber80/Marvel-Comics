import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public comicService: ComicService) {}
  comics: Comic[] = [];
  isLoaded?: boolean;

  ngOnInit(): void {
    this.isLoaded = false;
    this.comicService.getComics().subscribe({
      next: (data: any) => {
        let allComics = data['data']['results'];
        console.log(allComics);
        allComics.forEach((element: any) => {
          let comic = new Comic();
          comic.title = element['title'] ?? '';
          comic.description = element['description'] ?? '';
          comic.thumbnail =
            element['thumbnail']['path'] + element['thumbnail']['extension'];
          this.comics.push(comic);
        });
        this.isLoaded = true;
      },
    });
  }
}
