import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-appelorange',
  templateUrl: './appelorange.component.html',
  styleUrls: ['./appelorange.component.scss'],
})
export class AppelorangeComponent implements OnInit {

  constructor(private service:ServiceService) { }

  ngOnInit() {}

  myway(){
    this.service.callPhoneNumber('#131*41*1#');
  }

  orangepulse(){
    this.service.callPhoneNumber('#119*2*1*3*3*1#'); 
  }

  appelgratuit(n:number){
    this.service.callPhoneNumber('#131*6*'+n+'#');
  }

  solde(){
    this.service.callPhoneNumber('#123#');
  }

  orangeBonus(n:number){
    this.service.callPhoneNumber('#131*7*'+n+'#'); 
  }

}
