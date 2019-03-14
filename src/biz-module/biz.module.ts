import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BizRoutingModule} from './biz-routing.module';
import {RootStoreModule} from '../app/root-store';
import {BizContainerComponent} from './biz.container.component';

@NgModule({
  declarations: [
    BizContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    BizRoutingModule,
  ],
  providers: [],
  bootstrap: [BizContainerComponent]
})
export class BizModule { }
