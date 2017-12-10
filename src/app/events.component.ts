import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'events',
  templateUrl: './events.component.html'
})
export class EventsComponent {

  constructor( private appService: AppService) {}

  ngOnInit() {
    this.appService.getEvents();
  }
}
