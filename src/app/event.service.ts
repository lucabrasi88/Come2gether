import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Event } from './event';
import { EVENTS } from './mock-events';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl = 'api/events';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    // TODO: send the message _after_ fetching the events
    return this.http.get<Event[]>(this.eventsUrl)
                    .pipe(tap(_ => this.log('fetched events')),
                          catchError(this.handleError<Event[]>('getEvents', []))
    );
  }

  getEvent(id: number): Observable<Event>{
    // this.messageService.add('EventService: Event id=${id} fetched!');
    // return of(EVENTS.find(event => event.id === id));
    const url = `${this.eventsUrl}/${id}`;
    return this.http.get<Event>(url)
    .pipe(tap(_ => this.log(`fetched event id=${id}`)),
                        catchError(this.handleError<Event>(`getEvent id=${id}`)));
  }

  /** PUT: update the hero on the server */
  updateHero (event: Event): Observable<any> {
    return this.http.put(this.eventsUrl, event, this.httpOptions).pipe(
    tap(_ => this.log(`updated event id=${event.id}`)),
    catchError(this.handleError<any>('updateEvent'))
  );
}

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.add(`EventService: ${message}`);
}
}
