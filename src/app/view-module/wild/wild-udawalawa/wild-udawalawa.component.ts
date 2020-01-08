import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap';

@Component({
  selector: 'app-wild-udawalawa',
  templateUrl: './wild-udawalawa.component.html',
  styleUrls: ['./wild-udawalawa.component.css']
})
export class WildUdawalawaComponent implements OnInit {

  constructor(private bsModalRef: BsModalRef) { }

  ngOnInit() {
  }
  onCloseModal(response: any) {
    this.bsModalRef.hide();
  }

}
