import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { CambContrPageRoutingModule } from './camb-contr-routing.module';

import { CambContrPage } from './camb-contr.page';

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CambContrPageRoutingModule
  ],
  declarations: [CambContrPage]
})
export class CambContrPageModule {}
