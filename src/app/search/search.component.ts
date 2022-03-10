import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';

interface Image {
  id: number;
  link: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url = "https://pixabay.com/api/?key=26062389-25f3ac48089ed7df26e99b5f8";
  httpData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.callApi();
  }
  
  callApi() {
    console.log("calltoApi");
    this.http.get<Image[]>(this.url).subscribe(data => {
      this.httpData = data;
      console.log(data);
    });
  }
}