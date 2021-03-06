import { Component, OnInit } from '@angular/core';
import { FlickrService } from '../services/flickr.service';

@Component({
  selector: 'app-search-images',
  templateUrl: './search-images.component.html',
  styleUrls: ['./search-images.component.scss']
})
export class SearchImagesComponent implements OnInit {
  images = [];
  keyword: string;
  p: number; // for pagination

  imagesAreShown = false;

  showImage() {
    this.imagesAreShown = !this.imagesAreShown;
  }

  constructor(private flickrService: FlickrService) { }

  ngOnInit(): void {
  }

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.flickrService.search_keyword(this.keyword)
      .toPromise()
      .then(res => {
        this.images = res;
      });
    }
  }

  inputHandler(event: any) {
    const value = event.target.value;
    console.log(value);
  }

}
