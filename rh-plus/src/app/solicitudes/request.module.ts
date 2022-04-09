import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { requestContainer } from './request.page';

import { RequestPageRoutingModule } from './request-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RequestPageRoutingModule
  ],
  declarations: [requestContainer]
})
export class RequestPageModule { }
