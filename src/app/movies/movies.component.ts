import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  moduleId: module.id,
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  latestMovies: Array<Object>;
  searchList: Array<Object>;
  searchStr: string;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(result => {
      this.popularList = result.results;
    });

    this._movieService.getLatestMovies().subscribe(result => {
      this.latestMovies = result.results;
    });
  }

  searchMovies() {
    this._movieService.searchMovies(this.searchStr).subscribe(result => {
      this.searchList = result.results;
    });
  }

  ngOnInit() {
  }

}
