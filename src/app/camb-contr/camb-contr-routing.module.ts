import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambContrPage } from './camb-contr.page';

const routes: Routes = [
  {
    path: '',
    component: CambContrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambContrPageRoutingModule {}
