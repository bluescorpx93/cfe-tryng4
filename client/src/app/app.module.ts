import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { BsDropdownModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { NavComponent } from './nav.component';
import { SafePipe } from './safe.pipe';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search.component';
import { SearchDetailComponent } from './search-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoDetailComponent,
    NavComponent,
    SafePipe,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
