import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule  } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './../app/services/movie.service';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviedetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: 'movie/:id',
        component: MoviedetailsComponent
      }
    ])
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
