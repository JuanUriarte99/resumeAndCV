/*
Juan Uriarte Barragán 2008467
01/05/2021
personal-project.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-personal-project',
  templateUrl: './personal-project.page.html',
  styleUrls: ['./personal-project.page.scss'],
})
export class PersonalProjectPage implements OnInit {

  private pProject: string = "";
  /*
  Constructor
  */
  constructor(private menu: MenuController,private router: Router,private afAuth: AngularFireAuth,private authSvc: AuthService) { }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.pProject = this.authSvc.getPersonalProject();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    this.authSvc.setPersonalProject(this.pProject);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}