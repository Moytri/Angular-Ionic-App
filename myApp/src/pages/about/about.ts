import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigationDetailsPage } from '../details/details';

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>Navigation</ion-title>
  </ion-navbar>
</ion-header>

<ion-content>
  <ion-list>
    <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-left>
      <ion-icon [name]="'logo-' + item.icon" [ngStyle]="{'color': item.color}" item-left></ion-icon>
      {{ item.title }}
    </button>
  </ion-list>
</ion-content>
`
})
export class AboutPage {
  items = [];

  constructor(public nav: NavController) {
    // This creates an array of 'item' objects.
    this.items = [
      {
        'title': 'Linkedin',
        'icon': 'linkedin',
        'description': 'LinkedIn (/ˌlɪŋktˈɪn/) is a business and employment-oriented service that operates via websites and mobile apps. Founded on December 28, 2002,[5] and launched on May 5, 2003.',
        'color': '#4875B4'
      },
      {
        'title': 'Dropbox',
        'icon': 'dropbox',
        'description': 'Drop box, or post box, a physical box for collection of outgoing mail.',
        'color': '#4169E1'
      },
      {
        'title': 'Facebook',
        'icon': 'facebook',
        'description': 'Facebook is an American online social media and social networking service company based in Menlo Park, California. Its website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
        'color': '#3B5998'
      },
      {
        'title': 'Github',
        'icon': 'github',
        'description': 'GitHub (originally known as Logical Awesome LLC)[3] is a web-based hosting service for version control using git. It is mostly used for computer code!',
        'color': '#171515'
      },
      {
        'title': 'Google+',
        'icon': 'googleplus',
        'description': 
'Google Plus (stylized as Google+) is an Internet-based social network that is owned and operated by Google.',
        'color': '#C63D2D'
      },
      {
        'title': 'Instagram',
        'icon': 'instagram',
        'description': 'Instagram is a photo and video-sharing social networking service owned by Facebook, Inc.',
        'color': '#5343a6'
      },
      {
        'title': 'Twitter',
        'icon': 'twitter',
        'description': 'Twitter (/ˈtwɪtər/) is an online news and social networking service on which users post and interact with messages known as "tweets". Tweets were originally restricted to 140 characters, but on November 7, 2017, this limit was doubled for all languages except Japanese, Korean, and Chinese.',
        'color': '#33CCFF'
      },
      {
        'title': 'Whatsapp',
        'icon': 'whatsapp',
        'description': 
'WhatsApp Messenger is a freeware and cross-platform messaging and Voice over IP (VoIP) service owned by Facebook.',
        'color': '#34AF23'
      },
      {
        'title': 'Youtube',
        'icon': 'youtube',
        'description': 'YouTube is an American video-sharing website headquartered in San Bruno, California. The service was created by three former PayPal employees—Chad Hurley, Steve Chen, and Jawed Karim—in February 2005. Google bought the site in November 2006 for US$1.65 billion; YouTube now operates as one of Google subsidiaries!',
        'color': '#FF3333'
      },
    ]
  }

  openNavDetailsPage(item) {
    this.nav.push(NavigationDetailsPage, { item: item });
  }
}
