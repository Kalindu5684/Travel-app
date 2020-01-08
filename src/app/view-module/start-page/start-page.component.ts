import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {
   public myForm: FormGroup
  constructor() {
    this.myForm = new FormGroup({
      'UserName': new FormControl('kalindu', Validators.required),
      'Password': new FormControl('test')
    });
  }

  ngOnInit() {
  }

}
