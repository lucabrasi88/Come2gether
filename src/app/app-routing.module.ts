import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { EventDetailComponent }  from './event-detail/event-detail.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';

const routes: Routes = [
  { path: 'events', component: EventsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: EventDetailComponent },
  {path: 'event-calendar', component: EventCalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
