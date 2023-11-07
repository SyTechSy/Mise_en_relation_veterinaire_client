import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPlanningModifierPageRoutingModule } from './information-planning-modifier-routing.module';

import { InformationPlanningModifierPage } from './information-planning-modifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPlanningModifierPageRoutingModule
  ],
  declarations: [InformationPlanningModifierPage]
})
export class InformationPlanningModifierPageModule {}
