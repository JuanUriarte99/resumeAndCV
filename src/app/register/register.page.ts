/*
Juan Uriarte Barragán 2008467
01/05/2021
register.page.ts
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email='';
  password='';
  /*
  Constructor 
  */
  constructor(private authSvc: AuthService, private router: Router,private alertController: AlertController) { }
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
  Function in charge of register the user and go to home 
  */
  onRegister(){
    this.authSvc.onRegister(this.email, this.password).then(()=>{
      this.authSvc.generateUser(this.email);
      console.log('Succes created user');
      this.router.navigateByUrl('/home');
    }).catch(error=>{
      this.presentAlert(error.message);
    })
    
  }
}
