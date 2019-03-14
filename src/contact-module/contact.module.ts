import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ContactRoutingModule} from './contact-routing.module';
import {RootStoreModule} from '../app/root-store';
import {ContactContainerComponent} from './contact.container.component';
import {MaterialImports} from '../app/material.imports';

@NgModule({
  declarations: [
    ContactContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RootStoreModule,
    HttpClientModule,
    ContactRoutingModule,
    MaterialImports
  ],
  providers: [],
  bootstrap: [ContactContainerComponent]
})
export class ContactModule { }
