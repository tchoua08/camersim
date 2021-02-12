import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppelorangeComponent } from './appelorange.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AppelorangeComponent],
  exports: [AppelorangeComponent]
})
export class AppelorangeComponentModule {}
