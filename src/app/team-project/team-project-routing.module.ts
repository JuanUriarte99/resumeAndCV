import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamProjectPage } from './team-project.page';

const routes: Routes = [
  {
    path: '',
    component: TeamProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamProjectPageRoutingModule {}
