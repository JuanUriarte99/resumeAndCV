import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecSkillsPageRoutingModule } from './tec-skills-routing.module';

import { TecSkillsPage } from './tec-skills.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecSkillsPageRoutingModule
  ],
  declarations: [TecSkillsPage]
})
export class TecSkillsPageModule {}
