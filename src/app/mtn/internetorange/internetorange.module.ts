import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetorangeComponent } from './internetorange.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [InternetorangeComponent],
  exports: [InternetorangeComponent]
})
export class InternetorangeComponentModule {}
