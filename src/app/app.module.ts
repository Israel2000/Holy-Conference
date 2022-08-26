import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { VTimelineComponent } from './v-timeline/v-timeline.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

import {CalendarModule} from 'primeng/calendar';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    VTimelineComponent,
    AboutContactComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, CalendarModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
