import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutresComponent } from './autres.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AutresComponent],
  exports: [AutresComponent]
})
export class AutresComponentModule {}
