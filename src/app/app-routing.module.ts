import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BanqueComponent} from "./banque/banque.component";
import {CompteComponent} from "./compte/compte.component";
import {PaiementsComponent} from "./paiements/paiements.component";

const routes: Routes = [
  {
    path:"banque",
    component:BanqueComponent
  },
  {
    path:"compte",
    component:CompteComponent
  },
  {
  path:"paiements",
    component:PaiementsComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
