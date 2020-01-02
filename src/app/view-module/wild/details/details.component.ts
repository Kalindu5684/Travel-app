import {Component, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements  OnInit {

  constructor(public bsModalRef: BsModalRef) {}


  ngOnInit() {}


  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }

}
