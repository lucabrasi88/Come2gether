import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Event } from './event';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const events = [
      { id: 11, name: 'BMW Berlin Marathon 2020' },
      { id: 12, name: 'Manchester Halfmarathon 2020' },
      { id: 13, name: 'Bieg o ciacho' },
      { id: 14, name: 'Bieg walentynkowy' },
      { id: 15, name: 'Bieg śladami bitwy nad Bzurą' },
      { id: 16, name: 'Bieg kobiet' },
      { id: 17, name: 'Ekiden' },
      { id: 18, name: 'Poznań Business Run' },
      { id: 19, name: 'Maniacka Dziesiątka 2020' },
      { id: 20, name: 'Marceliński Bieg Zimowy' }
    ];
    return {events};
  }

  // Overrides the genId method to ensure that a event always has an id.
  // If the eventes array is empty,
  // the method below returns the initial number (11).
  // if the eventes array is not empty, the method below returns the highest
  // event id + 1.
  genId(events: Event[]): number {
    return events.length > 0 ? Math.max(...events.map(event => event.id)) + 1 : 11;
  }
}