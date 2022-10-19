import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaIncorrectaPageRoutingModule } from './respuesta-incorrecta-routing.module';

import { RespuestaIncorrectaPage } from './respuesta-incorrecta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaIncorrectaPageRoutingModule
  ],
  declarations: [RespuestaIncorrectaPage]
})
export class RespuestaIncorrectaPageModule {}
