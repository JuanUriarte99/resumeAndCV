/*
Juan Uriarte Barragán 2008467
01/05/2021
tec-skills.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tec-skills',
  templateUrl: './tec-skills.page.html',
  styleUrls: ['./tec-skills.page.scss'],
})
export class TecSkillsPage implements OnInit {

  inputValue = '';
  tSkills: string[];

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
    this.updatetSkills();
    this.tSkills = this.authSvc.getTecSkills();
  }
  /*
  Function in charge on adding a skill
  */
  addtSkill(){
    /**
    * Add a skill if it is not already in the list
    */

    if (this.inputValue !== ''){

      const success = this.authSvc.addtSkill(this.inputValue);
      this.inputValue = '';
      this.updatetSkills();

      if (!success) {
        this.presentAlert();
      }
    }
  }
  /*
  Function in charge on delenting a skill 
  */
  deletetSkill(tSkill: string){
    /**  
    * Delete the skill and update the list
    */
    this.authSvc.deletetSkill(tSkill);
    this.updatetSkills();
  }
  /*
  Function in charge on uploading the list
  */
  updatetSkills(){
    /**
    * Update the list
    */
    this.tSkills = this.authSvc.getAlltSkills();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    this.authSvc.setTecSkills(this.tSkills);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}
