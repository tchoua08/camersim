import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-internet',
  templateUrl: './internet.component.html',
  styleUrls: ['./internet.component.scss'],
})
export class InternetComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  wandNet(n:number){
    this.service.callPhoneNumber('*123*2*2*'+n+'#');
  }

  wandNetJour(n:number){
    this.service.callPhoneNumber('*123*4*2*1*'+n+'#');
  }

  wandNetSemaine(n:number){
    this.service.callPhoneNumber('*123*4*2*2*'+n+'#');
  }

  wandNetMois(n:number){
    this.service.callPhoneNumber('*123*4*2*3*'+n+'#');
  }
}
