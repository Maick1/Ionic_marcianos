import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CumbionPageRoutingModule } from './cumbion-routing.module';

import { CumbionPage } from './cumbion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CumbionPageRoutingModule
  ],
  declarations: [CumbionPage]
})
export class CumbionPageModule {}
