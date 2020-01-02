import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() lat: number;
 @Input() lng: number ;
  @Input() zoom: number ;
    constructor() { }

  ngOnInit() {
  }

}
