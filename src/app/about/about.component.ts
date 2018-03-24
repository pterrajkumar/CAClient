import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //12.921307, 77.663056
  //public map: any = { lat: 12.921307, lng: 77.663056 };

  public map: any = { lat: 24.790119, lng: 93.941281 };


}
