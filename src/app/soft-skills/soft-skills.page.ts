/*
Juan Uriarte Barragán 2008467
01/05/2021
soft-skills.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.page.html',
  styleUrls: ['./soft-skills.page.scss'],
})
export class SoftSkillsPage implements OnInit {
  inputValue = '';
  sSkills: string[];
  /*
  Constructor 
  */
  constructor(
    private alertController: AlertController,
    private menu: MenuController,private router: Router,private afAuth: AngularFireAuth,private authSvc: AuthService
  ) {}
  /*
  Function in charge of presenting an alert when the skill is already in the list
  */
  async presentAlert() {

    const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Error',
        message: 'You have already put this skill.',
        buttons: ['OK']
    });

    await alert.present();
  }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.updatesSkills();
    this.sSkills = this.authSvc.getSoftSkills();
  }
  /*
  Function in charge on adding a skill
  */
  addsSkill(){
    /**
     * Add a skill if it is not already in the list
     */

    if (this.inputValue !== ''){

      const success = this.authSvc.addsSkill(this.inputValue);
      this.inputValue = '';
      this.updatesSkills();

      if (!success) {
        this.presentAlert();
      }
    }
  }
  /*
  Function in charge on delenting a skill 
  */
  deletesSkill(sSkill: string){
    /**
     * Delete the skill and update the list
     */
    this.authSvc.deletesSkill(sSkill);
    this.updatesSkills();
  }
  /*
  Function in charge on uploading the list
  */
  updatesSkills(){
    /**
     * Update the list
     */
    this.sSkills = this.authSvc.getAllsSkills();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    this.authSvc.setSoftSkills(this.sSkills);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}
