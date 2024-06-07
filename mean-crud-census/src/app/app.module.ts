import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CrudService } from './service/crud.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CensusListComponent } from './components/census-list/census-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCensusComponent } from './components/add-census/add-census.component';


@NgModule({
  declarations: [
    AppComponent,
    CensusListComponent,
    AddCensusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
