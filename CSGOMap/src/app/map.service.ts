import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
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
    private messageService: MessageService,
  ) { }

  getMaps(): Observable<MapInterface[]> {
    return this.http.get<MapInterface[]>(this.mapsUrl).pipe(
      catchError(this.handleError<MapInterface[]>('ERRORGetMaps', []))
    );
  }


  sendVote(selectedMap: string): Observable<MapInterface>  {
    console.log('je vais envoyé ' + selectedMap );
    return this.http.post<MapInterface>(this.mapsUrl, selectedMap, this.httpOptions).pipe(
      catchError(this.handleError<MapInterface>('ERRORSendVote'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`MessageService: ${message}`);
  }
}

