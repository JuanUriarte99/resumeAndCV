import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SoftSkillsPageRoutingModule } from './soft-skills-routing.module';

import { SoftSkillsPage } from './soft-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SoftSkillsPageRoutingModule
  ],
  declarations: [SoftSkillsPage]
})
export class SoftSkillsPageModule {}
