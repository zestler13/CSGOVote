import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { MapInterface } from './MapInterface';
import { MessageService } from './message.service';



@Injectable({ providedIn: 'root' })
export class MapService {

  private mapsUrl = 'api/maps';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getMaps(): Observable<MapInterface[]> {
    return this.http.get<MapInterface[]>(this.mapsUrl).pipe(
        tap(_ => this.log('fetched maps')),
      );
  }

  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }
}

