import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {DetailsComponent} from './details/details.component';



@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {
 public bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }
onDetail() {
    this.openModal();
}
private openModal() {
  const modalConfig: any = {
    class: 'modal-lg',
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true
  };

  this.bsModalRef = null;
  this.bsModalRef = this.modalService.show(DetailsComponent, modalConfig);
  }

}
