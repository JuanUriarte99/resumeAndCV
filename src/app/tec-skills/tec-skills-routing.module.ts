import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecSkillsPage } from './tec-skills.page';

const routes: Routes = [
  {
    path: '',
    component: TecSkillsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecSkillsPageRoutingModule {}
