import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OvnisPageRoutingModule } from './ovnis-routing.module';

import { OvnisPage } from './ovnis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvnisPageRoutingModule
  ],
  declarations: [OvnisPage]
})
export class OvnisPageModule {}
