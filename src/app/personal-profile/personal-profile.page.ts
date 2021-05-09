/*
Juan Uriarte Barragán 2008467
01/05/2021
personal-profile.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-personal-profile',
  templateUrl: './personal-profile.page.html',
  styleUrls: ['./personal-profile.page.scss'],
})
export class PersonalProfilePage implements OnInit {

  private email: string = "";
  private tlf: string = "";
  private address: string = "";
  private name: string = "";
  private lastname: string = "";
  /*
  Constructor 
  */
  constructor(private menu: MenuController,private router: Router,private afAuth: AngularFireAuth,private authSvc: AuthService ){ }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.email = this.authSvc.getEmail();
    this.tlf = this.authSvc.getTlf();
    this.address = this.authSvc.getAddress();
    this.name = this.authSvc.getName();
    this.lastname = this.authSvc.getLastname();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    const parts=this.address.split(",");
    this.authSvc.setAddress(parts[0],parts[1],parts[2]);
    this.authSvc.setEmail(this.email);
    this.authSvc.setTlf(this.tlf);
    this.authSvc.setName(this.name);
    this.authSvc.setLastname(this.lastname);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}


