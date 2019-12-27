import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) {
  }

  ngOnInit() {
  }


  onCloseModal(response: any) {
    // if (response) {
    //   this.onClose.next(response);
    // }
    this.bsModalRef.hide();
    // console.log('Hello World');
  }
}
