import { Component, OnInit } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {DetailsComponent} from './details/details.component';
import {DetailsSinharajaComponent} from './details-sinharaja/details-sinharaja.component';
import {WildUdawalawaComponent} from './wild-udawalawa/wild-udawalawa.component';
import {DetailsWilpattuwaComponent} from './details-wilpattuwa/details-wilpattuwa.component';
import {DetailsHoragollaComponent} from './details-horagolla/details-horagolla.component';
import {DetailsMinneriyaComponent} from './details-minneriya/details-minneriya.component';



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
  onDetailSin() {
    this.openModalSin();
  }
  private openModalSin() {
    const modalConfig: any = {
      class: 'modal-lg',
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true
    };

    this.bsModalRef = null;
    this.bsModalRef = this.modalService.show(DetailsSinharajaComponent, modalConfig);
  }
  onDetailUda() {
    this.openModalUda();
  }
  private openModalUda() {
    const modalConfig: any = {
      class: 'modal-lg',
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true
    };

    this.bsModalRef = null;
    this.bsModalRef = this.modalService.show(WildUdawalawaComponent, modalConfig);
  }
  onDetailWil(){
    this.openModalWil();
  }
   private openModalWil(){
     const modalConfig: any = {
       class: 'modal-lg',
       animated: true,
       keyboard: true,
       backdrop: true,
       ignoreBackdropClick: true
     };

     this.bsModalRef = null;
     this.bsModalRef = this.modalService.show(DetailsWilpattuwaComponent, modalConfig);
   }
  onDetailHora() {
    this.openModalHora();
  }
  private openModalHora() {
    const modalConfig: any = {
      class: 'modal-lg',
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true
    };

    this.bsModalRef = null;
    this.bsModalRef = this.modalService.show(DetailsHoragollaComponent, modalConfig);
  }
  onDetailMin(){
    this.openModalMin();
  }
  private openModalMin() {
    const modalConfig: any = {
      class: 'modal-lg',
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true
    };

    this.bsModalRef = null;
    this.bsModalRef = this.modalService.show(DetailsMinneriyaComponent, modalConfig);
  }
}
