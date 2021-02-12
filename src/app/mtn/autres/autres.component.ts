import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-autres',
  templateUrl: './autres.component.html',
  styleUrls: ['./autres.component.scss'],
})
export class AutresComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  langue(){
    this.service.callPhoneNumber('*123*6*1#');
  }


}
