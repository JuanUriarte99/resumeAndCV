import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtraCurriculumPageRoutingModule } from './extra-curriculum-routing.module';

import { ExtraCurriculumPage } from './extra-curriculum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtraCurriculumPageRoutingModule
  ],
  declarations: [ExtraCurriculumPage]
})
export class ExtraCurriculumPageModule {}
