import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { VTimelineComponent } from './v-timeline/v-timeline.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    VTimelineComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
