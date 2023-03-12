import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OvnisPage } from './ovnis.page';

const routes: Routes = [
  {
    path: '',
    component: OvnisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvnisPageRoutingModule {}
