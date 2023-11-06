import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageFinalConnexionVeterinairePageRoutingModule } from './page-final-connexion-veterinaire-routing.module';

import { PageFinalConnexionVeterinairePage } from './page-final-connexion-veterinaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageFinalConnexionVeterinairePageRoutingModule
  ],
  declarations: [PageFinalConnexionVeterinairePage]
})
export class PageFinalConnexionVeterinairePageModule {}
