import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StepsStoreEffects } from './effects';
import { stepsReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('steps', stepsReducer),
    EffectsModule.forFeature([StepsStoreEffects]),
  ],
  providers: [StepsStoreEffects]
})
export class StepsStoreModule {}

