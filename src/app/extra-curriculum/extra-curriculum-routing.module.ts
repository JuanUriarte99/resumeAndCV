import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtraCurriculumPage } from './extra-curriculum.page';

const routes: Routes = [
  {
    path: '',
    component: ExtraCurriculumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtraCurriculumPageRoutingModule {}
