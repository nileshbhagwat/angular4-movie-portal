import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    /* Since loading screen having blue background
    *  Not proper solution to show loading screen and change body background color :P
    */
    let body = document.getElementsByTagName('body')[0];
    body.style.backgroundColor = "white";
  }
}
