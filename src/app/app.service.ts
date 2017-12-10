import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    events = [];

    constructor( private http: Http) {}

    getEvents() {
        this.http.get('http://localhost:3000/events').subscribe(res => {
            this.events = res.json();
        });
    }

    postEvents(newEventData) {
        this.http.post('http://localhost:3000/events', newEventData).subscribe(res => {
        });
    }
}