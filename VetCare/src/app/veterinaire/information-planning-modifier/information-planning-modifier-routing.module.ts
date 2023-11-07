import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationPlanningModifierPage } from './information-planning-modifier.page';

const routes: Routes = [
  {
    path: '',
    component: InformationPlanningModifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationPlanningModifierPageRoutingModule {}
