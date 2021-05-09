/*
Juan Uriarte Barragán 2008467
01/05/2021
home.page.ts
*/
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /*
  Constructor
  */
  constructor(private menu: MenuController) {}
  /*
  Function that takes care of opening the menu
  */
  openMenu() {
    this.menu.toggle();
  }
}
