import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaCorrectaPageRoutingModule } from './respuesta-correcta-routing.module';

import { RespuestaCorrectaPage } from './respuesta-correcta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaCorrectaPageRoutingModule
  ],
  declarations: [RespuestaCorrectaPage]
})
export class RespuestaCorrectaPageModule {}
