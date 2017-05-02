import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  movie: Object;

  constructor(private router: ActivatedRoute, private _movieService: MovieService) { 

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this._movieService.getMovie(params['id']).subscribe(movie => {
        this.movie = movie;
      });
    });
  }

}
