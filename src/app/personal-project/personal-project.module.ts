import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalProjectPageRoutingModule } from './personal-project-routing.module';

import { PersonalProjectPage } from './personal-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalProjectPageRoutingModule
  ],
  declarations: [PersonalProjectPage]
})
export class PersonalProjectPageModule {}
