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

  solde(){
     this.service.callPhoneNumber('*123*10*99#');
  }


  wanda(){
    this.service.callPhoneNumber('*123*2*2#');
  }

  forfaitNet(){
    this.service.callPhoneNumber('*123*4*2#');
  }
  
  yamoSurf(){
    this.service.callPhoneNumber('*123*3*7*1*2#');
  }

  watsapp(){
    this.service.callPhoneNumber('*123*3*1*5#');
  }

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
