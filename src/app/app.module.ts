import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';

import {ChartModule} from 'primeng/chart';

import { Ejercicio1Component } from './ejercicio1/ejercicio1.component';
import { Ejercicio3Component } from './ejercicio3/ejercicio3.component';
import { Ejercicio2Component } from './ejercicio2/ejercicio2.component';
import { Grafica2Component } from './grafica2/grafica2.component';
import { Grafica3Component } from './grafica3/grafica3.component';


@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio3Component,
    Ejercicio2Component,
    Grafica2Component,
    Grafica3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    HttpClientModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
