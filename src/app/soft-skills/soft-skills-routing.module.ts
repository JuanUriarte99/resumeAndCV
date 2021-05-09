import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftSkillsPage } from './soft-skills.page';

const routes: Routes = [
  {
    path: '',
    component: SoftSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftSkillsPageRoutingModule {}
