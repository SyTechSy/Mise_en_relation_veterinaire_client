import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterUtilisateurPage } from './footer-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: FooterUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterUtilisateurPageRoutingModule {}
