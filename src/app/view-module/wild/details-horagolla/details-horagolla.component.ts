import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-details-horagolla',
  templateUrl: './details-horagolla.component.html',
  styleUrls: ['./details-horagolla.component.css']
})
export class DetailsHoragollaComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }
}
