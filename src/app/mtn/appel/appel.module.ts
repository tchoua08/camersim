import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppelComponent } from './appel.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [AppelComponent],
  exports: [AppelComponent]
})
export class AppelComponentModule {}
