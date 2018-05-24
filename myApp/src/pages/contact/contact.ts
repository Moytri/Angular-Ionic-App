import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [RedditDataProvider]
})

export class ContactPage implements OnInit {

    myNames: Observable<any>;
    _myDataService: RedditDataProvider;


    constructor(myDataService: RedditDataProvider) {
        this._myDataService = myDataService;
    }


    ionViewDidLoad(){
        console.log(this._myDataService.getLocalData())
        this._myDataService.getLocalData().subscribe(
   
            data => {
                this.myNames = data
                console.log(JSON.stringify(data))
            },

            error => {
                alert(error)
            },

            () => {
                console.log("Finished")
            });
    }
}
