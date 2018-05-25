import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MenuController } from 'ionic-angular';
import {ContactPage} from '../../pages/contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  name:string;
  pwd:string;

  constructor(public navCtrl: NavController, public storage: Storage, public menuCtrl: MenuController) {
      
      // Prepare storage.
      storage.ready().then(() => {
          // Store some data if none exists.
          if(!this.storage.get('pwd')) {
              console.log("Storing default data!");
              this.storage.set('name', 'This is the default name.');
              this.storage.set('pwd',  'This is the default password.');
          }      
      });
  }

  // Executes every time page is viewed.
  ionViewWillEnter(){
    this.displayData();
  }

  // Uses a promise to get data.
  displayData() {      
      this.storage.get('name').then((name) => {
          this.name = name;
      });
      this.storage.get('pwd').then((pwd) => {
          this.pwd = pwd;
      });
  }

   closeMenu() {
     this.menuCtrl.close();
   }

   toggleMenu() {
     this.menuCtrl.toggle();
   }

  openContact(){
    this.navCtrl.setRoot(ContactPage);
  }
}
