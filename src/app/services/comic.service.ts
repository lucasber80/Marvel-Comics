import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root',
})
export class ComicService {
  
  constructor(private http: HttpClient) {}

  apiUrl = environment.base_url;

  makeAuthorization(): string {
    const md5 = new Md5();
    let privateKey = environment.private_key;
    let publicKey = environment.public_key;
    let ts = 1;
    let hash = md5.appendStr(ts + privateKey + publicKey).end();
    let queryParams = '?ts=' + ts + '&apikey=' + publicKey + '&hash=' + hash;
    return queryParams;
  }

  getCharacters() {
    return this.http.get(this.apiUrl + 'characters' + this.makeAuthorization());
  }

  getComics() {
    return this.http.get(this.apiUrl + 'comics' + this.makeAuthorization());
  }
}
