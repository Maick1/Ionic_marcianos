import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CumbionPage } from './cumbion.page';

const routes: Routes = [
  {
    path: '',
    component: CumbionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CumbionPageRoutingModule {}
