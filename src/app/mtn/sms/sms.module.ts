import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsComponent } from './sms.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [SmsComponent],
  exports: [SmsComponent]
})
export class SmsComponentModule {}
