import { Component, OnInit, ViewChild } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.css'],
})
export class ComicListComponent implements OnInit {
  constructor(public comicService: ComicService) {}

  comics?: Comic[];
  cont = 25;
  title = 'google-maps';
  private map?: google.maps.Map;
  location = { lat: -3.734089261572743, lng: -38.58960639818155 };
  marker: any;
  loader = new Loader({
    apiKey: 'AIzaSyD_PVg8b4Vyn6sH2WCiHBfRCRgbQZLAjHI',
  });

  options = {
    center: this.location,
    zoom: 6,
  };

  loadMoreComics() {
    this.cont += 10;
    this.comics = this.comics = this.comicService.comics.slice(0, this.cont);
  }

  disableLoadButton(): boolean {
    if (this.comics?.length == this.comicService.comics.length) return true;
    return false;
  }

  ngOnInit(): void {
    this.comics = this.comicService.comics.slice(0, this.cont);
    let mapCanvas = document.getElementById('map');

    this.loader.load().then(() => {
      this.map = new google.maps.Map(mapCanvas!, this.options);
      this.marker = new google.maps.Marker({
        position: this.location,
        map: this.map,
      });
      google.maps.event.addListener(this.map, 'click', (event: any) => {
        this.placeMarker(event);
      });
    });
  }

  placeMarker(event: any) {
    this.marker.setMap(null);
    this.marker = new google.maps.Marker({
      position: event.latLng,
      map: this.map,
    });
    console.log();
  }
}
