/*
Juan Uriarte Barragán 2008467
01/05/2021
contact-information.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-contact-information',
  templateUrl: './contact-information.page.html',
  styleUrls: ['./contact-information.page.scss'],
})
/*
ContactInformationPage class
*/
export class ContactInformationPage implements OnInit {

  private email: string = "";
  private tlf: string = "";
  private address: string = "";
  /*
  Constructor
  */
  constructor(private menu: MenuController,private router: Router,private afAuth: AngularFireAuth,private authSvc: AuthService) { }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
    this.email = this.authSvc.getEmail();
    this.tlf = this.authSvc.getTlf();
    this.address = this.authSvc.getAddress();
  }
  /*
  Function that takes care of calling to the service to save the user
  */
  saveUser(){
    const parts=this.address.split(",");
    this.authSvc.setAddress(parts[0],parts[1],parts[2]);
    this.authSvc.setEmail(this.email);
    this.authSvc.setTlf(this.tlf);
    this.authSvc.updateUser();
  }
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}
