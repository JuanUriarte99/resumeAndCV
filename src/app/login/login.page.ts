/*
Juan Uriarte Barragán 2008467
01/05/2021
login.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email='';
  password='';
  /*
  Constructor 
  */
  constructor(private router: Router, private authSvc: AuthService,private alertController: AlertController) { }
  /*
  Function to be executed when initializing the page 
  */
  ngOnInit() {
  }
  /*
  Function in charge of the alerts 
  */
  async presentAlert(errormsg: string) {

    const alert = await this.alertController.create({
        cssClass: 'alert',
        header: 'Error',
        message: errormsg,
        buttons: ['OK']
    });

    await alert.present();
  }
  /*
  Function in charge of doing the login and go to home 
  */
  async onLogin(){
    this.authSvc.onLogin(this.email, this.password).then(()=>{
      this.authSvc.loadUser(this.email);
    }).catch(error=>{
      this.presentAlert(error.message);
    })
  }
}
