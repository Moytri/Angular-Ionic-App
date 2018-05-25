import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditDataProvider } from '../../providers/reddit-data/reddit-data';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [RedditDataProvider]
})

export class ContactPage {

    myNames: Array<any>;
    _myDataService: RedditDataProvider;


    constructor(myDataService: RedditDataProvider) {
        this._myDataService = myDataService;
    }


    ngOnInit()  {
    }
    
    ionViewDidLoad(){
        console.log(this._myDataService.getLocalData())
        this._myDataService.getLocalData().subscribe(
   
            data => {
                this.myNames = data
                //console.log(JSON.stringify(data))
            },

            error => {
                alert(error)
            },

            () => {
                console.log("Finished")
            });
    }
}
