import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StepsContainerComponent} from './components/steps.container.component';

const routes: Routes = [
  {path: '', component: StepsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepsRoutingModule { }
