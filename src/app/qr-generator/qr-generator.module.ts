import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';

import { IonicModule } from '@ionic/angular';

import { QrGeneratorPageRoutingModule } from './qr-generator-routing.module';

import { QrGeneratorPage } from './qr-generator.page';

@NgModule({
  imports: [
    MatButtonModule,
    CommonModule,
    FormsModule,
    IonicModule,
    QrGeneratorPageRoutingModule
  ],
  declarations: [QrGeneratorPage]
})
export class QrGeneratorPageModule {}
