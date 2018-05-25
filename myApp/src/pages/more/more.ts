import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from 'ionic-angular';


@Component({
    selector: 'page-mine',
    templateUrl: 'more.html'
})
export class More {
  pwd:string;
  portname:string;
  input:string;

  constructor(public navCtrl: NavController, public storage: Storage) {
  }

  // User clicked button.
  setPerson() {
      this.storage.set('name', this.portname)
      this.storage.set('pwd', this.pwd)
      this.input = this.portname + " " + this.pwd;
  }
}



