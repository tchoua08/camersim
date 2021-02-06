import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.scss'],
})
export class SmsComponent implements OnInit {
  
  constructor(private service:ServiceService) { }

  ngOnInit() {}

  sms(n:number){
    this.service.callPhoneNumber('*123*4*6*'+n+'#');
  }

}
