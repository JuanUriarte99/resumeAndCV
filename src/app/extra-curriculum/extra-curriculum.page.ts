/*
Juan Uriarte Barragán 2008467
01/05/2021
extra-curriculum.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-extra-curriculum',
  templateUrl: './extra-curriculum.page.html',
  styleUrls: ['./extra-curriculum.page.scss'],
})
export class ExtraCurriculumPage implements OnInit {

  private extraCurr: string = "";
  /*
  Constructor 
  */
  constructor(private menu: MenuController,private router: Router,private afAuth: AngularFireAuth,private authSvc: AuthService) { }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.extraCurr = this.authSvc.getExtraCurriculum();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    this.authSvc.setExtraCurriculum(this.extraCurr);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}



