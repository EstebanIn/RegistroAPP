import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApiServicePage } from './api-service.page';

const routes: Routes = [
  {
    path: '',
    component: ApiServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiServicePageRoutingModule {}
