import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-details-wilpattuwa',
  templateUrl: './details-wilpattuwa.component.html',
  styleUrls: ['./details-wilpattuwa.component.css']
})
export class DetailsWilpattuwaComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }

}
