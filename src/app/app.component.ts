import { Component } from '@angular/core';
//import { FlickrService } from './services/flickr.service'; // -- for pagination

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flickrsearch';

  //constructor(private flickr: FlickrService) {} // -- for pagination
}
