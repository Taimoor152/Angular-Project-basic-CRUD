import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { 
  MatFormFieldModule,
  MatInputModule, 
  MatButtonModule,
  MatToolbarModule, 
  MatCardModule, 
  MatDatepickerModule,
   MatNativeDateModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { EventsComponent } from './events.component';
import { EventRegisterComponent } from './events-register.component';

const routes = [
  { path: '', component: EventsComponent },
  { path: 'add-event', component: EventRegisterComponent }
]

@NgModule({
  declarations: [
    AppComponent, EventsComponent, EventRegisterComponent
  ],
  imports: [
    BrowserModule, HttpModule, MatFormFieldModule,
    MatInputModule, MatButtonModule, MatToolbarModule,
    MatCardModule, MatDatepickerModule, MatNativeDateModule,
    NoopAnimationsModule, FormsModule, RouterModule.forRoot(routes) 
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }