import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { mainNavReducer } from './reducer';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('main-nav', mainNavReducer),
  ],
})
export class MainNavStoreModule {}

