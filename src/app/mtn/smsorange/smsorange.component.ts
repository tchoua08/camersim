import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';


@Component({
  selector: 'app-smsorange',
  templateUrl: './smsorange.component.html',
  styleUrls: ['./smsorange.component.scss'],
})
export class SmsorangeComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  packsms(n:number){
    this.service.callPhoneNumber('#131*1*'+n+'#');
  }
  sms(n:number){
    this.service.callPhoneNumber('*123*4*6*'+n+'#');
  }

}
