import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactInformationPageRoutingModule } from './contact-information-routing.module';

import { ContactInformationPage } from './contact-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactInformationPageRoutingModule
  ],
  declarations: [ContactInformationPage]
})
export class ContactInformationPageModule {}
