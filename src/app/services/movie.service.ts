import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
    apiKey: string;

    constructor(private _jsonp: Jsonp) {
        this.apiKey = '6541ced6c8bbf906e05427dff6cd1f03';
        console.log('MovieService...');
    }

    getPopular() {
        // tslint:disable-next-line:max-line-length
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=' + this.apiKey)
                .map(result => result.json());
    }

    getLatestMovies(){
        // tslint:disable-next-line:max-line-length
        return this._jsonp.get('https://api.themoviedb.org/3/movie/upcoming?callback=JSONP_CALLBACK&primary_release_date.gte=2017-01-01&primary_release_date.lte=2016-07-02&sort_by=popularity.desc&api_key=' + this.apiKey)
                .map(result => result.json());
    }

    searchMovies(searchStr: string){
        // tslint:disable-next-line:max-line-length
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query=' + searchStr + '&sort_by=popularity.desc&api_key=' + this.apiKey)
                .map(result => result.json());
    }

    getMovie(id: string){
        // tslint:disable-next-line:max-line-length
        return this._jsonp.get('https://api.themoviedb.org/3/movie/' + id + '?callback=JSONP_CALLBACK&api_key=' + this.apiKey)
                .map(result => result.json());
    }
}
