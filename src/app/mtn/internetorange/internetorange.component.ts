import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-internetorange',
  templateUrl: './internetorange.component.html',
  styleUrls: ['./internetorange.component.scss'],
})
export class InternetorangeComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  solde(){
     this.service.callPhoneNumber('#145*1#');
  }

  
   orangejour(n:number){
    this.service.callPhoneNumber('#145*2*3*'+n+'#');
  }

  

  orangegigadata(n:number){
    this.service.callPhoneNumber('#145*2*4*1*'+n+'#');
  }

  orange15gigadata(n:number){
    this.service.callPhoneNumber('#145*2*4*2*'+n+'#');
  }


  orange7gigadata(n:number){
    this.service.callPhoneNumber('#145*2*4*3*'+n+'#');
  }

  orange3gigadata(n:number){
    this.service.callPhoneNumber('#145*2*4*4*'+n+'#');
  }

  creerForfait(){
   this.service.callPhoneNumber('#131*41*2#'); 
  }

  emprunt(){
    this.service.callPhoneNumber('#145*3#');
  }



  orangeBestDeals(n:number){
   this.service.callPhoneNumber('#111*0*1*'+n+'#'); 
  }

  orangeBestDeals3(n:number){
    this.service.callPhoneNumber('#111*0*2*'+n+'#'); 
  }

  orangeBestDeals24(n:number){
    this.service.callPhoneNumber('#111*0*3*'+n+'#'); 
  }

  orangeInternet(n:number){
    this.service.callPhoneNumber('#145*2*1*'+n+'#');
  }

  orange3Internet(n:number){
    this.service.callPhoneNumber('#145*2*2*'+n+'#');
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
