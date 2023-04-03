import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThucDonComponent } from './thuc-don/thuc-don.component';
import { DsTDonComponent } from './thuc-don/ds-t-don/ds-t-don.component';
import { ThemSuaTDonComponent } from './thuc-don/them-sua-t-don/them-sua-t-don.component';
import { MonAnComponent } from './mon-an/mon-an.component';
import { DsMAnComponent } from './mon-an/ds-m-an/ds-m-an.component';
import { ThemSuaMAnComponent } from './mon-an/them-sua-m-an/them-sua-m-an.component';

import { SharedService  } from './shared.service';
import {HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThucDonComponent,
    DsTDonComponent,
    ThemSuaTDonComponent,
    MonAnComponent,
    DsMAnComponent,
    ThemSuaMAnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
