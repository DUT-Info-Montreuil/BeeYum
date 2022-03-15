import { HttpClient } from "@angular/common/http";
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

var url: string = "https://pixabay.com/api/?key=26062389-25f3ac48089ed7df26e99b5f8";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  @Output() sidenavClose = new EventEmitter(); 

  httpData: any = [];
  searchText: string = '';

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
  
  search() {
    url = 
    `https://pixabay.com/api/?key=26062389-25f3ac48089ed7df26e99b5f8&q=${this.searchText}`;
    this.http.get(url).subscribe(data => {
      this.httpData = data;
      console.log(data);
      console.log(url);
    });
  }

}