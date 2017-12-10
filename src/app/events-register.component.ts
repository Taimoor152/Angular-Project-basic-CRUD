import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'events-register',
  templateUrl: './events-register.component.html'
})
export class EventRegisterComponent {

    newEventData = {}    
  
    constructor( private appService: AppService) {}

    post() {
        this.appService.postEvents(this.newEventData);
    }

    cancel() {
        this.newEventData = {};
    }    
    
}
