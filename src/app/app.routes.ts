import { RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';

RouterModule.forRoot([
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MoviedetailsComponent
  }
]);
