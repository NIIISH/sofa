import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {InfoRoutingModule} from './info-routing.module';
import {RootStoreModule} from '../app/root-store';
import {InfoContainerComponent} from './info.container.component';

@NgModule({
  declarations: [
    InfoContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    InfoRoutingModule,
  ],
  providers: [],
  bootstrap: [InfoContainerComponent]
})
export class InfoModule { }
