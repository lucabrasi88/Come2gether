import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EVENTS } from '../mock-events';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
// event: Event = {
//   id: 1,
//   name: "Kościan halfmarathon",
//   description: "Półmaraton w Kościanie",
//   date: new Date(),
//   distance: 21
// };

// events = EVENTS;
// selectedEvent: Event;
// onSelect(event: Event): void {
//   this.selectedEvent = event;
// }

constructor(private eventService: EventService) { }

getEvents(): void {
  this.eventService.getEvents().subscribe(events => this.events = events);
}

  events: Event[];

  ngOnInit() {
    this.getEvents();
  }

}
