import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { requestContainer } from './request.page';

const routes: Routes = [
  {
    path: '',
    component: requestContainer,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestPageRoutingModule { }
