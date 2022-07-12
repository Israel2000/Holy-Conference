import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SvgComponent } from './svg/svg.component';
import { VTimelineComponent } from './v-timeline/v-timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    SvgComponent,
    VTimelineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
