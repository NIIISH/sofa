import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoContainerComponent} from './info.container.component';

const routes: Routes = [
  {path: 'info', component: InfoContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
