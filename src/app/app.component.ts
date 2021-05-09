/*
Juan Uriarte Barragán 2008467
01/05/2021
app.component.ts
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
/*
AppComponent class
*/
export class AppComponent {
  constructor(private router: Router,private afAuth: AngularFireAuth) {}
  /*
  Function that takes care of calling to the service to logout and go to login page
  */
  onLogout(){
    this.afAuth.signOut();
    this.router.navigateByUrl('/login');
  }
}
