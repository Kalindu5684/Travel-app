import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-details-minneriya',
  templateUrl: './details-minneriya.component.html',
  styleUrls: ['./details-minneriya.component.css']
})
export class DetailsMinneriyaComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }
}
