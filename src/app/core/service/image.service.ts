import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Image } from '../models';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url = 'Generators_Search';

  constructor(
    private http: HttpClient,
    private configurationService: ConfigurationService
  ) { }

  getImages(keyword: string): Observable<Image[]> {
    const options = keyword ?
   { params: new HttpParams().set('q', keyword).append('apiKey', this.configurationService.settings.apiKey ) } : {};
    return this.http.get(
      `${this.configurationService.settings.api}/${this.url}`, options
      )
      .pipe(
        map((response: []) => response.map(r => new Image(r)))
      );
  }
}
