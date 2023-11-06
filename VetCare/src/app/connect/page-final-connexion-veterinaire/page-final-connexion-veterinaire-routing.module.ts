import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageFinalConnexionVeterinairePage } from './page-final-connexion-veterinaire.page';

const routes: Routes = [
  {
    path: '',
    component: PageFinalConnexionVeterinairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageFinalConnexionVeterinairePageRoutingModule {}
