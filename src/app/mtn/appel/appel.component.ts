import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-appel',
  templateUrl: './appel.component.html',
  styleUrls: ['./appel.component.scss'],
})
export class AppelComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  solde(){
    this.service.callPhoneNumber('*155#');
 }

 emprunt(){
  this.service.callPhoneNumber('*123*3*6*1#');
}
  wandaCall(){
    this.service.callPhoneNumber('*123*2*1#');
  }

  wandaAppel(){
    this.service.callPhoneNumber('*123*4*3#');
  }

  mtnyamo(){
    this.service.callPhoneNumber('*123*3*7*1#');
  }

  mtngoplan(){
    this.service.callPhoneNumber('*123*1*1#');
  }
  wandaInt(){
    this.service.callPhoneNumber('*123*4*4#');
  }

  wanda(n:number){
    this.service.callPhoneNumber('*123*2*1*0*'+n+'#');
  }

  wandaJour(n:number){
    this.service.callPhoneNumber('*123*2*1*1*'+n+'#');
  }

  wandaSemaine(n:number){
    this.service.callPhoneNumber('*123*2*1*2*'+n+'#');
  }

  wandaMois(n:number){
    this.service.callPhoneNumber('*123*2*1*3*'+n+'#');
  }



  appelJour(n:number){
    this.service.callPhoneNumber('*123*4*3*1*'+n+'#');
  }
  appelSemaine(n:number){
    this.service.callPhoneNumber('*123*4*3*2*'+n+'#');
  }

  appelMois(n:number){
    this.service.callPhoneNumber('*123*4*3*3*'+n+'#');
  }

}
