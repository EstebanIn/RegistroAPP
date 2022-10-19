import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaIncorrectaPage } from './respuesta-incorrecta.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaIncorrectaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaIncorrectaPageRoutingModule {}
