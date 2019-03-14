import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StepsRoutingModule} from './steps-routing.module';
import {SwiperModule} from 'ngx-swiper-wrapper';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import {StepsStoreModule} from '../app/root-store';
import {StepsContainerComponent} from './components/steps.container.component';
import {StepsTextAreaComponent} from './components/steps-text-area/steps-text-area.component';
import {MaterialImports} from '../app/material.imports';
import {StepsNavComponent} from './components/steps-nav/steps-nav.component';
import {StepsMapsComponent} from './components/steps-maps/steps-maps.component';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {MAP_API_KEY} from '../config';

@NgModule({
  declarations: [
    StepsContainerComponent,
    StepsTextAreaComponent,
    StepsNavComponent,
    StepsMapsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StepsStoreModule,
    HttpClientModule,
    StepsRoutingModule,
    MaterialImports,
    SwiperModule,
    AgmCoreModule.forRoot({
      apiKey: MAP_API_KEY
    }),
    AgmSnazzyInfoWindowModule,
    !environment.production
      ? StoreDevtoolsModule.instrument({ maxAge: 50 })
      : [],
  ],
  providers: [],
  bootstrap: [StepsContainerComponent]
})
export class StepsModule { }
