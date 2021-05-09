/*
Juan Uriarte Barragán 2008467
01/05/2021
team-project.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-team-project',
  templateUrl: './team-project.page.html',
  styleUrls: ['./team-project.page.scss'],
})
export class TeamProjectPage implements OnInit {

  private tProject: string = "";
  /*
  Constructor 
  */
  constructor(private menu: MenuController,private router: Router,private afAuth: AngularFireAuth, private authSvc: AuthService) { }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.tProject = this.authSvc.getTeamProject();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    this.authSvc.setTeamProject(this.tProject);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}