import { Component, OnInit, Input } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

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
