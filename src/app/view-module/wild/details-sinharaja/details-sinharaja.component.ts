import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-details-sinharaja',
  templateUrl: './details-sinharaja.component.html',
  styleUrls: ['./details-sinharaja.component.css']
})
export class DetailsSinharajaComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }

}
