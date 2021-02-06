import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternetComponent } from './internet.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [InternetComponent],
  exports: [InternetComponent]
})
export class InternetComponentModule {}
