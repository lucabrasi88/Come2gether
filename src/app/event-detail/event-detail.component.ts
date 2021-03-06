import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EventService }  from '../event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;

  constructor(private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location) { }

  ngOnInit(): void {
    this.getEvent();
  }

  getEvent() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventService.getEvent(id)
    .subscribe(event => this.event = event);
  }

  save(): void{
    // this.eventService.updateEvent(this.event)
    //  .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
