import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppCustomPreloader} from './app.custom.preloader';

const routes: Routes = [
  {path: '', redirectTo: 'info', pathMatch: 'full'},
  {path: 'steps', loadChildren: '../steps-module/steps.module#StepsModule', data: {preload: true}},
  {path: 'biz', loadChildren: '../biz-module/biz.module#BizModule', data: {preload: true}},
  {path: 'contact', loadChildren: '../contact-module/contact.module#ContactModule'},
  {path: '**', redirectTo: 'info', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})
export class AppRoutingModule {}
