import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private callNumber: CallNumber) { }

  public callPhoneNumber(phoneNumber:string) : void{
    this.callNumber.callNumber(phoneNumber, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
