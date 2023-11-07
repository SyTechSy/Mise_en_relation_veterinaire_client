import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FooterUtilisateurPageRoutingModule } from './footer-utilisateur-routing.module';

import { FooterUtilisateurPage } from './footer-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FooterUtilisateurPageRoutingModule
  ],
  declarations: [FooterUtilisateurPage]
})
export class FooterUtilisateurPageModule {}
