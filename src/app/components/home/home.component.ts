import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { Creator } from 'src/app/models/creator';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public comicService: ComicService) {}
  
  isLoaded?: boolean;

  ngOnInit(): void {
    this.isLoaded = false;
    this.comicService.getComics().subscribe({
      next: (data: any) => {
        let allComics = data['data']['results'];

        allComics.forEach((element: any) => {
          let comic = new Comic();
          let creators = element['creators']['items'];

          comic.title = element['title'] ?? '';
          comic.description = element['description'] ?? '';
          comic.thumbnail =
            element['thumbnail']['path'] +
            '.' +
            element['thumbnail']['extension'];

          creators.forEach((element: any) => {
            let creator = new Creator();
            creator.name = element['name'];
            creator.role = element['role'];
            comic.creators.push(creator);
          });

          this.comicService.comics.push(comic);
        });
        this.isLoaded = true;
      },
    });
  }
}
