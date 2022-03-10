import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// interface image{
//   id: number;
//   pageURL: any;
//   type: any;
//   tags: any;
//   previewURL: any;
//   previewWidth: any;
//   previewHeight: any; 
//   webFormatURL: any;
//   webFormatWidth: any;
//   webFormatHeight: any;
//   largeImageURL: string;
//   imageWidth: any;
//   imageHeight: any;
//   imageSize: any;
//   views: any;
//   downloads: any;
//   collections: any;
//   likes: any;
//   comments: any;
//   user_id: any;
//   user: any;
//   userImageURL: any;
// }

var url: string = "https://pixabay.com/api/?key=26062389-25f3ac48089ed7df26e99b5f8";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter(); 

  // url = "https://pixabay.com/api/?key=26062389-25f3ac48089ed7df26e99b5f8";
  httpData: any = [];
  searchText = '';

  toggleSearch: boolean = false;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    this.callApi(); 
  }
  
  callApi() {
    this.http.get(url).subscribe(data => {
      this.httpData = data;
      console.log(data);
    });
  }

}