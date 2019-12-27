import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AboutComponent} from '../about/about.component';
import {DetailsComponent} from './details/details.component';
import {Subject} from 'rxjs';


@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {
bsModalRef: BsModalRef;
  public onClose: Subject<boolean>;
private action = null;
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
  // this.bsModalRef.content.action = this.action;
  // // this.bsModalRef.content.user = Object.assign({}, this.userDetail || {});
  // this.bsModalRef.content.onClose.subscribe();

}

}
