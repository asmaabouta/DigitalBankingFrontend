import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanqueComponent } from './banque/banque.component';
import {HttpClientModule} from "@angular/common/http";
import { CompteComponent } from './compte/compte.component';
import {FormsModule} from "@angular/forms";
import { PaiementsComponent } from './paiements/paiements.component';


@NgModule({
  declarations: [
    AppComponent,
    BanqueComponent,
    CompteComponent,
    PaiementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
