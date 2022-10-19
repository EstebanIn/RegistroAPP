import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApiServicePageRoutingModule } from './api-service-routing.module';

import { ApiServicePage } from './api-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApiServicePageRoutingModule
  ],
  declarations: [ApiServicePage]
})
export class ApiServicePageModule {}
